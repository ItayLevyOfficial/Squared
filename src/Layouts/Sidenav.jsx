import { LibraryIcon, BookOpenIcon } from '@heroicons/react/outline'
import { useLocation } from 'react-router-dom'
import Logo from '../launchEvent/icons/logo.svg'

export const Sidenav = () => {
  const { pathname } = useLocation()

  return (
    <div className="h-full mr-6  flex flex-col justify-evenly font-medium">
      <div className="h-10" />
      <div className="flex flex-col justify-between h-full">
        <div className="h-full space-y-6 items-start px-6 rounded-2xl">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-none mr-5 items-center">
              <img src={Logo} width={60} />

              <div className="w-5 float-none" />
              <div className="flex flex-col space-y-2 font-bold tracking-widest">
                <h1 className="text-white text-4xl font-basic font-semibold tracking-wide">
                  SQUARED
                </h1>
              </div>
            </div>
          </div>

          <div className="pt-6 space-y-8">
            <div className="flex cursor-pointer group space-x-2 items-center ">
              <LibraryIcon
                className={`h-6 text-white ${
                  pathname !== '/assets' && 'opacity-40'
                }`}
              />

              <a
                href="/assets"
                className={`text-white font-medium  text-lg ${
                  pathname !== '/assets' && 'opacity-40'
                }`}
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
                className={`text-white font-medium text-lg ${
                  pathname !== '/dashboard' && 'opacity-40'
                }`}
              >
                Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
