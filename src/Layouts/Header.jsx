import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const { pathname } = useLocation()
  const { ethereum } = window
  const [connected, setConnected] = useState(false)

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
    <nav className="flex h-20 space-x-2 items-center justify-between w-full mt-2 mb-4">
      <div className="block text-white opacity-90 text-3xl">
        {pathname == '/products' ? 'Assets' : 'Dashboard'}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={connectWallet}
          disabled={connected}
          className="w-36 h-10 flex justify-center text-gray-100 bg-primary  cursor-pointer rounded-xl p-2"
        >
          {connected ? connected.toString().substring(0, 10) : `Connect Wallet`}
        </button>
      </div>
    </nav>
  )
}

export default Header
