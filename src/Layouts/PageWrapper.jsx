import { useState } from 'react'
import { Header } from './Header'
import { Footer } from '../launchEvent/Footer'
import { Sidenav } from './Sidenav'
import { ModalDisplay } from '../products/ModalDisplay'
import { useConnectWallet } from '../launchEvent/useConnectWallet'

export const PageWrapper = ({children}) => {
  const [signer, connectWallet, address] = useConnectWallet()
  const [isModalOpen, setIsOpen] = useState(false)
  const [selectedToken, setSelectedToken] = useState('')

  const open = (id) => {
    setIsOpen(true)
    setSelectedToken(id)
  }

  const close = () => {
    setIsOpen(false)
  }

return (
  <div className="flex">
    <ModalDisplay
      isOpen={isModalOpen}
      close={close}
      selectedToken={selectedToken}
    />
      <Sidenav />
      <div className="flex flex-col w-10/12 max-w-main min-h-full">
        <Header connectWallet={connectWallet} address={address}/>
          {children}
        <div className="w-full flex justify-center h-full items-end mb-6">
          <Footer />
        </div>
      </div>
  </div>
    )
}