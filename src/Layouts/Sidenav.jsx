import { LibraryIcon, BookOpenIcon } from '@heroicons/react/outline'
import { useLocation } from 'react-router-dom'

const PuffLogo = ({ className = '' }) => (
  <svg
    className={className}
    width="560"
    height="560"
    viewBox="0 0 560 560"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="280" cy="280" r="280" fill="black" />
    <path
      d="M277.431 460.552C227.152 457.077 181.708 436.028 147.199 403.505C160.54 386.138 164.44 362.75 164.44 362.75C158.675 365.383 125 371.007 125 371.007C139.81 339.855 161.377 334.189 161.377 334.189C155.4 334.83 126.916 332.504 126.916 332.504C145.122 301.661 174.737 295.801 174.737 295.801C183.372 294.871 174.096 289.821 174.096 289.821C167.02 286.547 140.397 282.681 140.397 282.681C173.148 249.602 189.312 249.886 189.312 249.886C188.073 244.637 169.014 229.886 169.014 229.886C174.114 227.325 219.277 209.71 219.277 209.71C215.694 182.545 263.062 185.535 263.062 185.535C297.831 165.003 311.801 138.648 311.801 138.648C312.768 135.181 324.545 125.854 324.545 125.854C346.734 113.398 360.257 126.73 360.257 126.73C366.505 134.8 371.412 161.826 371.412 161.826C383.636 131.617 420.448 117.59 420.448 117.596C418.544 112.432 427.965 100 427.965 100C450.183 137.929 418.049 145.407 418.049 145.407C415.535 147.02 392.7 153.496 392.7 153.496C374.983 157.416 373.013 170.392 373.013 170.392L368.94 170.156L368.517 166.169L355.332 162.212L323.458 216.022L362.142 194.403L359.085 184.653L398.386 193.884L396.984 230.985L389.751 232.435L384.935 218.837C381.37 223.253 324.817 285.085 324.817 285.085C306.901 299.776 287.534 288.407 287.534 288.407C288.489 309.809 269.358 350.831 269.358 350.831C251.514 385.003 263.08 411.31 263.08 411.31C264.614 419.427 271.173 440.881 277.431 460.552Z"
      fill="#FFD700"
    />
  </svg>
)

export const Sidenav = () => {
  const { pathname } = useLocation()

  return (
    <div className="sticky h-screen top-0 mr-6  w-52 bg-dark text-white flex flex-col space-y-6 items-start px-6 pt-6">
      <div className="w-full flex flex-col justify-center items-center">
        <PuffLogo className="h-24 w-24 object-cover my-2" />
        <h1 className="text-3xl">PUFF</h1>
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
