import MetamaskIcon from '../launchEvent/icons/metamask.svg'
import React from 'react'

export const Header = (props) => {
  return (
    <nav className="flex flex-wrap h-20 items-center justify-end w-full px-4 mt-7">
      <img src={MetamaskIcon} alt="" className="mr-4" />

      <AddressButton {...props} />
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
