import React, { useEffect, useState } from 'react'
import { LaunchScreenHeader } from './LaunchScreenHeader'
import { Body } from './Body'
import { Footer } from './Footer'
import Dragon from './icons/dragon.svg'
import { useConnectWallet } from './useConnectWallet'
import { ethers } from 'ethers'
import { launchContractAbi } from './defiRoundAbi'
const launchContractAddress = '0xCA8c8688914e0F7096c920146cd0Ad85cD7Ae8b9'

export const LaunchEventScreen = () => {
  const [signer, connectWallet, walletAddress] = useConnectWallet()
  const [launchContract, setLaunchContract] = useState()
  const [userData, setUserData] = useState()

  const commitFunds = async ({amount, token}) => {
    if (launchContract) {
      await launchContract.deposit({token, amount}, [], {value: amount})
    }    
  }

  useEffect(() => {
    setLaunchContract(
      new ethers.Contract(launchContractAddress, launchContractAbi, signer)
    )
  }, [signer])

  useEffect(() => {
    if (launchContract && walletAddress) {
      console.log({ launchContract })
      launchContract.getAccountData(walletAddress).then((response) => {
        console.log({ response })

      })
    }
  }, [launchContract, walletAddress])

  return (
    <ScreenPaddedContainer>
      <div className="flex flex-col items-center justify-between w-full max-w-screen-xl h-full">
        <LaunchScreenHeader
          address={walletAddress}
          connectWallet={connectWallet}
        />
        <Body isConnected={walletAddress} connectWallet={connectWallet} commitFunds={commitFunds}/>
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
