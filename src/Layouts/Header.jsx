import Fantom from "../Assets/Fantom.svg"
import {useLocation} from "react-router-dom"

const Header = () => {
    const {pathname} = useLocation()

    return (
        <nav className="flex flex-wrap h-20 space-x-2 items-center justify-between w-full mt-2">
            <div className="block text-[#FD7C50] opacity-90 text-3xl">
                {pathname == "/assets" ? "Puff's Long Tail Assets" : "Puff's Paper"}
            </div>
            <AddressButton/>
        </nav>
    )
}

export const AddressButton = ({onClick, address = "0xA3318B6027DC8fC382F990Bee9d2308E2ea3a388"}) => (
    <button onClick={onClick}
            className="border-solid border-[0.5px] border-white text-white font-medium h-fit px-5 py-2 rounded-xl hover:border-0 hover:bg-lightDark">

        {address.slice(0, 7)}...
    </button>
)

export default Header
