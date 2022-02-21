import { LibraryIcon, BookOpenIcon } from '@heroicons/react/outline'
import { useLocation } from 'react-router-dom'
import { BrandingSection } from '../launchEvent/LaunchScreenHeader'

export const Sidenav = () => {
  const { pathname } = useLocation()

  return (
    <div className="h-full flex flex-col font-medium">
      <div className="h-10" />
      <div className="flex flex-col justify-between h-full">
        <div className="h-full space-y-6 items-start px-6 rounded-2xl">
          <BrandingSection children={'CYCLE ZERO-0'} />

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
