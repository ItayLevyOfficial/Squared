import { LibraryIcon, BookOpenIcon } from '@heroicons/react/outline'
import Logo from './icons//goldlogo.svg'
import { useLocation } from 'react-router-dom'

const Sidenav = () => {
  const { pathname } = useLocation()

  return (
    <div className="sticky h-screen top-0 mr-6  w-52 bg-dark text-white flex flex-col space-y-6 items-start px-6 pt-6">
      <div className="w-full flex flex-col justify-center items-center">
        <img
          src={Logo}
          className="w-24 h-24 bg-dark rounded-full cursor-default"
        />
        <h1 className="text-3xl  cursor-default text-white">PUFF</h1>
      </div>

      <div className="flex cursor-pointer group space-x-2 items-center ">
        <LibraryIcon
          className={`h-6 text-white ${
            pathname !== '/products' && 'opacity-40'
          }`}
        />

        <a
          href="/products"
          className={`text-white ${pathname !== '/products' && 'opacity-40'}`}
        >
          Assets
        </a>
      </div>

      <div className="flex cursor-pointer group space-x-2 items-center">
        <BookOpenIcon
          className={`h-6 text-white ${
            pathname !== '/dashboard' && 'opacity-40'
          }`}
        />
        <a
          href="/dashboard"
          className={`text-white ${pathname !== '/dashboard' && 'opacity-40'}`}
        >
          Dashboard
        </a>
      </div>
    </div>
  )
}

export default Sidenav
