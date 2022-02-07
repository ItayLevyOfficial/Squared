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

export const AddressButton = ({ address, connectWallet }) => {
  const [isHovered, setIsHovered] = useState(false)

  console.log({ address, connectWallet })

  const buttonStyles = 'bg-primary border-none font-baloo'
  const styles = address ? (isHovered ? buttonStyles : '') : buttonStyles
  
  const buttonText = address ? `${address.slice(0, 7)}...` : 'Connect'

  return (
    <button
      onClick={connectWallet}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border-solid border-[0.5px] border-white text-white font-number h-fit px-5 py-2 rounded-xl ${styles}`}
    >
      {buttonText}
    </button>
  )
}
