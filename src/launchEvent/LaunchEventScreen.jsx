import React, { useEffect, useState } from 'react'
import { LaunchScreenHeader } from './LaunchScreenHeader'
import { Body } from './Body'
import { Footer } from './Footer'
import Dragon from './icons/dragon.svg'
import { useConnectWallet } from './useConnectWallet'
import { launchContractAbi } from './defiRoundAbi'
import { selectedChain } from './chains'
import { useContract } from './useContract'

export const LaunchEventScreen = () => {
  const [signer, connectWallet, walletAddress] = useConnectWallet()
  const launchContract = useContract(
    signer,
    selectedChain.launchContractAddress,
    launchContractAbi
  )

  return (
    <ScreenPaddedContainer>
      <div className="flex flex-col items-center justify-between w-full max-w-screen-xl h-full">
        <LaunchScreenHeader
          address={walletAddress}
          connectWallet={connectWallet}
        />
        <Body
          isConnected={walletAddress}
          connectWallet={connectWallet}
          launchContract={launchContract}
        />
        <Footer />
      </div>
      <img
        src={Dragon}
        alt=""
        className="fixed bottom-6 left-6 min-w-[200px] min-h-[200px] h-2/12 w-2/12"
      />
    </ScreenPaddedContainer>
  )
}

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen h-screen bg-black flex flex-col items-center px-40 pt-10 pb-16">
    {props.children}
  </div>
)
