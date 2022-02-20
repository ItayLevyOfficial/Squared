import { LibraryIcon, BookOpenIcon } from '@heroicons/react/outline'
import { useLocation } from 'react-router-dom'
import Logo from '../launchEvent/icons/logo.svg'

const BrandingSection = () => (
  <div className="flex flex-none h-fit">
    <img src={Logo} width={60} />
    <div className="w-5 flex-none" />
    <div className="w-[0.5px] h-50 bg-primary float-none" />
    <div className="w-5 float-none" />
    <div className="flex flex-col space-y-2 font-bold tracking-widest">
      <h1 className="text-white text-4xl font-basic font-semibold tracking-wide">
        SQUARED
      </h1>
      <div className="flex items-center">
        <h2 className="text-primary text-lg font-normal mr-1.5">
          CYCLE ZERO-0
        </h2>
      </div>
    </div>
  </div>
)

export const Sidenav = () => {
  const { pathname } = useLocation()

  return (
    <div className="h-full mr-6  flex flex-col justify-evenly font-medium">
      <div className="h-10" />
      <div className="flex flex-col justify-between h-full">
        <div className="h-full space-y-6 items-start px-6 rounded-2xl">
          <BrandingSection />

          <div className="pt-12 space-y-6">
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
