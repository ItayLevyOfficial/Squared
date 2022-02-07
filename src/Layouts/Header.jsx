import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import React from 'react'

export const Header = (props) => {
  const { pathname } = useLocation()

  return (
    <nav className="flex flex-wrap h-20 space-x-2 items-center justify-between w-full mt-2">
      <div className="block text-white opacity-90 text-3xl">
        {pathname == '/assets' ? 'Assets' : 'Dashboard'}
      </div>
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
    <AddressContainer className="border-solid border-[0.5px] border-white font-number">
      {`${address.slice(0, 7)}...`}
    </AddressContainer>
  ) : (
    <AddressContainer onClick={connectWallet} className="bg-primary hover:bg-opacity-95">
      Connect
    </AddressContainer>
  )
