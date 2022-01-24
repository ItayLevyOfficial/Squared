import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <nav className="flex flex-wrap h-20 space-x-2 items-center justify-between w-full mt-2">
      <div className="block text-white opacity-90 text-3xl">
        {pathname === '/products' ? 'Assets' : 'Dashboard'}
      </div>
      <AddressButton />
    </nav>
  )
}

export const AddressButton = () => {
  const [connected, setConnected] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { ethereum } = window

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert('Please install MetaMask.')

      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      setConnected(accounts)
    } catch (error) {
      console.log(error)

      throw new Error('No ethereum object')
    }
  }

  return (
    <button
      onClick={connectWallet}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-solid border-[0.5px] border-white text-white font-number hover:font-baloo h-fit
                    px-5 py-2 rounded-xl hover:border-0 hover:bg-lightDark"
    >
      {!connected ? 'Connect' : `${connected.toString().slice(0, 7)}...`}
    </button>
  )
}

export default Header
