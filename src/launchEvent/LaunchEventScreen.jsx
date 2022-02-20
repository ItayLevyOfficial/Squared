import React from 'react'
import { Body } from './Body'
import { selectedChain } from './chains'
import { launchContractAbi } from './defiRoundAbi'
import { Footer } from './Footer'
import { LaunchScreenHeader } from './LaunchScreenHeader'
import { useConnectWallet } from './useConnectWallet'
import { useContract } from './useContract'

export const LaunchEventScreen = () => {
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
          address={walletAddress}
          connectWallet={connectWallet}
        />
        <Body writeLaunchContract={writeLaunchContract} address={walletAddress} />
        <Footer />
      </div>
    </ScreenPaddedContainer>
  )
}

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen h-screen bg-black flex flex-col items-center px-16 pt-10 pb-16">
    {props.children}
  </div>
)
