import React from 'react'
import { selectedChain } from '../chains'
import { launchContractAbi } from '../launchEvent/abis/defiRoundAbi'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { useContract } from '../launchEvent/utils'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { LaunchScreenHeader } from '../launchEvent/LaunchScreenHeader'
import { LaunchScreenBody } from '../launchEvent/LaunchScreenBody'
import { Footer } from '../launchEvent/Footer'
import { weekInMillis } from '../launchEvent/LaunchScreenHeader'
import { PrimaryLink } from '../launchEvent/commitAssetsModal/commitAssetsModal'
import { LastLookBody } from './lastLookBody'

export const LastLookScreen = () => {
  const [signer, , walletAddress] = useConnectWallet()
  const writeLaunchContract = useContract(
    signer,
    selectedChain.launchContractAddress,
    launchContractAbi
  )

  return (
    <ScreenPaddedContainer>
      <div className="flex flex-col items-center justify-between w-full max-w-screen-2xl h-full">
        <LaunchScreenHeader
          timeLeftData={{
            startTime: selectedChain.lastLookStart,
            length: weekInMillis / 7,
          }}
          phase="LAST LOOK"
          paragraph={
            <>
              {' '}
              Squared's last look period has arrived. Now users can see the
              final swap/farming ratio and withdraw their committed funds.
              &nbsp;
              <PrimaryLink>Learn more</PrimaryLink>
            </>
          }
        />
        <LastLookBody />
        <Footer />
      </div>
    </ScreenPaddedContainer>
  )
}
