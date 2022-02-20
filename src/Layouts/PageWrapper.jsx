import React from 'react'
import { Header } from './Header'
import { Sidenav } from './Sidenav'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { Footer } from '../launchEvent/Footer'

export const PageWrapper = ({ children }) => {
  const [signer, connectWallet, address] = useConnectWallet()

  return (
    <div className="w-screen h-screen bg-black flex  px-16 pt-10 pb-6">
      <Sidenav />
      <div className="flex flex-col w-full ">
        <Header connectWallet={connectWallet} address={address} />
        <div className="flex flex-col justify-evenly items-center w-full h-full ">
          {children}
        </div>
        <div className="w-full flex justify-center  mb-10 ">
          <Footer />
        </div>
      </div>
    </div>
  )
}
