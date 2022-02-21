import React from 'react'
import { selectedChain } from '../chains'
import { launchContractAbi } from '../launchEvent/abis/defiRoundAbi'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { useContract } from '../launchEvent/utils'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { LaunchScreenHeader } from '../launchEvent/LaunchScreenHeader'
import { Body } from '../launchEvent/Body'
import { Footer } from '../launchEvent/Footer'
import { weekInMillis } from '../launchEvent/LaunchScreenHeader'

export const LastLookScreen = () => {
  const [signer, connectWallet, walletAddress] = useConnectWallet()
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
        />
        <Body
          writerLaunchContract={writeLaunchContract}
          address={walletAddress}
        />
        <Footer />
      </div>
    </ScreenPaddedContainer>
  )
}
