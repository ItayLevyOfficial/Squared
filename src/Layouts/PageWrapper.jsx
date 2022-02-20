import React from 'react'
import { Header } from './Header'
import { Sidenav } from './Sidenav'
import { useConnectWallet } from '../launchEvent/useConnectWallet'
import { Footer } from '../launchEvent/Footer'

export const PageWrapper = ({ children }) => {
  const [signer, connectWallet, address] = useConnectWallet()

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="flex h-full">
        <Sidenav />
        <div className="flex flex-col items-between justify-between -ml- w-10/12 max-w-main min-h-full overflow-y-scroll ">
          <Header connectWallet={connectWallet} address={address} />
          <div className="flex flex-col justify-evenly items-center w-full h-full ">
            {children}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-end mb-10 ">
        <Footer />
      </div>
    </div>
  )
}
