import React from 'react'
import { Header } from './Header'
import { Sidenav } from './Sidenav'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { Footer } from '../launchEvent/Footer'

export const PageWrapper = ({ children }) => {
  const [signer, connectWallet, address] = useConnectWallet()

  return (
    <div className="flex flex-col justify-between h-screen pb-6">
      <div className="flex h-full">
        <Sidenav />
        <div className="flex flex-col items-between justify-between max-w-main min-h-full overflow-y-scroll ">
          <Header connectWallet={connectWallet} address={address} />
          <div className="flex flex-col justify-evenly items-center w-[900px] h-full ">
            {children}
          </div>
          <div className="w-full flex justify-center items-end mb-10 ">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}
