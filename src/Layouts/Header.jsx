import React from 'react'
import MetamaskIcon from '../launchEvent/icons/metamask.svg'
import { BrandingSection } from '../launchEvent/LaunchScreenHeader'

export const PageToggleWrapper = ({ children }) => {
  return (
    <div className="flex cursor-pointer group space-x-2 items-center  p-2 ">
      {children}
    </div>
  )
}

export const Header = (props) => {
  return (
    <nav
      className={`flex w-full justify-between items-center
    `}
    >
      <BrandingSection>CYCLE ZERO</BrandingSection>
      <PageToggle />
      <div className="flex items-center h-fit w-44 justify-end flex-shrink-0">
        <img src={MetamaskIcon} alt="" className="mr-4" />
        <AddressButton {...props} />
      </div>
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
