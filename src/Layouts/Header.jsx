import Fantom from "../Assets/Fantom.svg"
import {useLocation} from "react-router-dom"

const Header = () => {
    const {pathname} = useLocation()

    return (
        <nav className="flex flex-wrap h-20 space-x-2 items-center justify-between w-full mt-2">
            <div className="block text-[#FD7C50] opacity-90 text-3xl">
                {pathname == "/assets" ? "Puff's Long Tail Assets" : "Puff's Paper"}
            </div>
            <HeaderButtons/>
        </nav>
    )
}

export const HeaderButtons = ({connectWallet}) => <div className="flex space-x-4">
    <div
        className="w-36 h-10 flex justify-center items-center border-transparent  bg-[#2F8652] text-gray-200 cursor-default rounded-xl p-2">
        <img src={Fantom} className="h-8 w-8"/>
        <div>Fantom</div>
    </div>
    <div className=" w-36 h-10 flex justify-center text-gray-100 bg-[#D05C47]  cursor-pointer rounded-xl p-2">
        Connect Wallet
    </div>
</div>

export default Header
