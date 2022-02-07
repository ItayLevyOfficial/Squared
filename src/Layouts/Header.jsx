import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ethers } from 'ethers'
import React from 'react'

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <nav className="flex flex-wrap h-20 space-x-2 items-center justify-between w-full mt-2">
      <div className="block text-white opacity-90 text-3xl">
        {pathname == '/assets' ? 'Assets' : 'Dashboard'}
      </div>
      <AddressButton />
    </nav>
  )
}

export const AddressButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [address, setAddress] = useState()
  const connectWalletHandler = async () => {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x7a' }],
      })
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x7a',
                chainName: 'Fuse',
                rpcUrls: ['https://rpc.fuse.io/'],
              },
            ],
          })
        } catch (addError) {
          console.error(addError)
        }
      }
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    setAddress(await signer.getAddress())
  }

  const buttonStyles = 'bg-primary border-none font-baloo'
  const styles = address ? (isHovered ? buttonStyles : '') : buttonStyles

  const buttonText = address
    ? isHovered
      ? 'Disconnect'
      : `${address.slice(0, 7)}...`
    : 'Connect'

  return (
    <button
      onClick={connectWalletHandler}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`border-solid border-[0.5px] border-white text-white font-number h-fit px-5 py-2 rounded-xl ${styles}`}
    >
      {buttonText}
    </button>
  )
}
