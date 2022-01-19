import { LibraryIcon, BookOpenIcon } from "@heroicons/react/outline"
import Logo from "../Assets/Logo.svg"
import { useLocation } from "react-router-dom"

const Sidenav = () => {
  const { pathname } = useLocation()

  return (
    <div className="my-6 bg-[#2F8652] text-white w-52  border-transparent rounded-xl flex flex-col space-y-6 items-start px-6 pt-6">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="bg-white rounded-full">
          <img src={Logo} className="w-20 h-20 rounded-full border" />
        </div>
        <div className="text-gray-100 underline cursor-default">PUFF</div>
      </div>

      <div className="flex cursor-pointer group space-x-2 items-center ">
        <LibraryIcon
          className={`h-6 text-white ${
            pathname !== "/products" && "opacity-40"
          }`}
        />

        <a
          href="/products"
          className={`text-white ${pathname !== "/products" && "opacity-40"}`}
        >
          Puff's Long Tail
        </a>
      </div>

      <div className="flex cursor-pointer group space-x-2 items-center">
        <BookOpenIcon
          className={`h-6 text-white ${
            pathname !== "/dashboard" && "opacity-40"
          }`}
        />
        <a
          href="/dashboard"
          className={`text-white ${pathname !== "/dashboard" && "opacity-40"}`}
        >
          Puff's Paper
        </a>
      </div>
    </div>
  )
}

export default Sidenav
