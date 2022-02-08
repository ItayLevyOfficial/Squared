import React from 'react'
import { Header } from './Header'
import { Footer } from '../launchEvent/Footer'
import { Sidenav } from './Sidenav'
import {useConnectWallet} from '../launchEvent/useConnectWallet'

export const PageWrapper = ({children}) => {
  const [signer, connectWallet, address] = useConnectWallet()

return (
  <div className="flex">
      <Sidenav />
      <div className="flex flex-col w-10/12 max-w-main min-h-full">
        <Header connectWallet={connectWallet} address={address}/>
          <div className="flex flex-col self-center justify-center items-center w-full h-full">
            {children}
          </div>
        <div className="w-full flex justify-center items-end mb-6">
          <Footer />
        </div>
      </div>
  </div>
    )
}