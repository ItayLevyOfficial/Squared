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
  // const busdContract = useContract(
  //   signer,
  //   '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   erc20abi
  // )

  // useEffect(() => {
  //   if (busdContract) {
  //     busdContract.balanceOf('0xa99301333bbe78fba9b2357c4c71737844239292').then(response => console.log({response}))
  //   }
  // }, [busdContract])
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
        <Body writerLaunchContract={writeLaunchContract} address={walletAddress} />
        <Footer />
      </div>
    </ScreenPaddedContainer>
  )
}

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen h-screen bg-black flex flex-col items-center px-36 pt-10 pb-16">
    {props.children}
  </div>
)
