import MetamaskIcon from '../launchEvent/icons/metamask.svg'
import React from 'react'
import { LibraryIcon, BookOpenIcon, MinusIcon } from '@heroicons/react/outline'
import { useLocation } from 'react-router-dom'
import { BrandingSection } from '../launchEvent/LaunchScreenHeader'

export const PageToggleWrapper = ({ children }) => {
  return (
    <div className="flex cursor-pointer group space-x-2 items-center  p-2 ">
      {children}
    </div>
  )
}

export const PageToggle = () => {
  const { pathname } = useLocation()

  return (
    <div className="flex items-center justify-center space-x-6 mr-12">
      <PageToggleWrapper>
        <LibraryIcon
          className={`h-6 text-white ${pathname !== '/assets' && 'opacity-40'}`}
        />

        <a
          href="/assets"
          className={`text-white font-medium  text-lg ${
            pathname !== '/assets' && 'opacity-40'
          }`}
        >
          Assets
        </a>
      </PageToggleWrapper>
      <div className="w-1.5 h-1.5 border bg-white rounded-full" />

      <PageToggleWrapper>
        <a
          href="/dashboard"
          className={`text-white font-medium text-lg ${
            pathname !== '/dashboard' && 'opacity-40'
          }`}
        >
          Dashboard
        </a>{' '}
        <BookOpenIcon
          className={`h-6 text-white ${
            pathname !== '/dashboard' && 'opacity-40'
          }`}
        />
      </PageToggleWrapper>
    </div>
  )
}

export const Header = (props) => {
  return (
    <nav
      className={`flex w-full justify-between items-center
    `}
    >
      <BrandingSection children={'CYCLE ZERO'} />
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
