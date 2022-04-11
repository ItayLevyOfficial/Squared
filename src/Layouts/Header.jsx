import React from 'react'
import MetamaskIcon from '../launchEvent/icons/metamask.svg'
import { BrandingSection, MiddleSection } from '../launchEvent/LaunchScreenHeader'
import { useConnectWallet } from '../launchEvent/useConnectWallet'

export const Header = () => {
  const [, connectWallet, address] = useConnectWallet()

  return (
    <nav
      className={`flex w-full justify-between
    `}
    >
      <BrandingSection>CYCLE ZERO</BrandingSection>
      <MiddleSection />
      <AddressSection connectWallet={connectWallet} address={address} />
    </nav>
  )
}

const AddressContainer = ({ children, className, onClick }) => (
  <button
    className={`text-white h-fit px-5 py-2 rounded-xl ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

export const AddressButton = ({ address, connectWallet }) =>
  address ? (
    <AddressContainer className="border-solid border-[0.5px] border-white  font-number">
      {`${address.slice(0, 7)}...`}
    </AddressContainer>
  ) : (
    <AddressContainer
      onClick={connectWallet}
      className="bg-darkPrimary hover:bg-opacity-95"
    >
      Connect
    </AddressContainer>
  )

export const AddressSection = ({ connectWallet, address }) => {
  return (
    <div className="flex items-center h-fit w-44 justify-end flex-shrink-0">
      <img src={MetamaskIcon} alt="" className="mr-4" />
      <AddressButton connectWallet={connectWallet} address={address} />
    </div>
  )
}
