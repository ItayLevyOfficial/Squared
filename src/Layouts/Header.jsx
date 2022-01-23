import Fantom from '../Assets/Fantom.svg'
import { useLocation } from 'react-router-dom'
import { ethers } from 'ethers'

const Header = () => {
  const { pathname } = useLocation()

  function getBalance() {
    const url =
      'https://winter-blue-resonance.bsc.quiknode.pro/8f059c17bb29420d84ff5cf99bbaea3be1eb081b/'

    const provider = new ethers.providers.JsonRpcProvider(url)

    console.log(provider)
  }

  getBalance()

  return (
    <nav className="flex h-20 space-x-2 items-center justify-between w-full mt-2 mb-4">
      <div className="block text-white opacity-90 text-3xl">
        {pathname == '/products' ? 'Assets' : 'Dashboard'}
      </div>
      <div className="flex space-x-4">
        <div className="w-36 h-10 flex justify-center items-center border-transparent  bg-[#2F8652] text-gray-200 cursor-default rounded-xl p-2">
          <img src={Fantom} className="h-8 w-8" />
          <div>Fantom</div>
        </div>
        <button className="w-36 h-10 flex justify-center   text-gray-100 bg-[#D05C47]  cursor-pointer rounded-xl p-2">
          Connect Wallet
        </button>
      </div>
    </nav>
  )
}

export default Header
