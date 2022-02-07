import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ethers } from 'ethers'

export const AddressButton = () => {
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
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    await provider.send('eth_requestAccounts', [])
    const signer = provider.getSigner()
    setAddress(await signer.getAddress())
  }

  useEffect(async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const { chainId } = await provider.getNetwork()
    if (chainId === 122) {
      setAddress(await signer.getAddress())
    } else {
      setAddress()
    }
  }, [])

  window.ethereum.on('chainChanged', () => {
    window.location.reload()
  })

  const buttonText = address ? `${address.slice(0, 7)}...` : 'Connect'

  return (
    <button
      onClick={connectWalletHandler}
      className="font-number h-fit px-5 py-2 rounded-xl border-0 bg-gold text-black hover:bg-dark hover:text-white "
    >
      {buttonText}
    </button>
  )
}

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <nav className="flex flex-wrap h-20 items-center justify-between w-full px-6 mt-2">
      <div className="block text-white opacity-90 text-3xl">
        {pathname == '/assets' ? 'Assets' : 'Dashboard'}
      </div>
      <AddressButton />
    </nav>
  )
}
