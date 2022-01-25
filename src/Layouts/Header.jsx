import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const { pathname } = useLocation()

  return (
    <nav className="flex flex-wrap h-20 space-x-2 items-center justify-between w-full mt-2">
      <div className="block text-white opacity-90 text-3xl">
        {pathname == '/products' ? 'Assets' : 'Dashboard'}
      </div>
      <AddressButton />
    </nav>
  )
}

export const AddressButton = ({
  address = '0xA3318B6027DC8fC382F990Bee9d2308E2ea3a388',
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border-solid border-[0.5px] border-white text-white font-number hover:font-baloo h-fit
                    px-5 py-2 rounded-xl hover:border-0 hover:bg-lightDark"
    >
      {isHovered ? 'Disconnect' : `${address.slice(0, 7)}...`}
    </button>
  )
}

export default Header
