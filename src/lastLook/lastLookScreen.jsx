import React from 'react'
import { selectedChain } from '../launchEvent/chains'
import { launchContractAbi } from '../launchEvent/defiRoundAbi'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { useContract } from '../launchEvent/useContract'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { LaunchScreenHeader } from '../launchEvent/LaunchScreenHeader'
import { Body } from '../launchEvent/Body'
import { Footer } from '../launchEvent/Footer'

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
        <LaunchScreenHeader phase='LAST LOOK PERIOD'
          address={walletAddress}
          connectWallet={connectWallet}
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
