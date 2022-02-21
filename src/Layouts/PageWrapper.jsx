import React from 'react'
import { Header } from './Header'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { Footer } from '../launchEvent/Footer'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'

export const PageWrapper = ({ children }) => {
  const [signer, connectWallet, address] = useConnectWallet()
  return (
    <ScreenPaddedContainer>
      <Header connectWallet={connectWallet} address={address} />
      <div className="flex flex-col justify-evenly items-center w-10/12 h-full ">
        {children}
      </div>
      <Footer />
    </ScreenPaddedContainer>
  )
}
