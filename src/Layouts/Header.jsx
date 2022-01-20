import Fantom from "../Assets/Fantom.svg"
import {useLocation} from "react-router-dom"

const Header = () => {
    const {pathname} = useLocation()

    return (
        <nav className="flex flex-wrap h-20 space-x-2 items-center justify-between w-full mt-2">
            <div className="block text-[#FD7C50] opacity-90 text-3xl">
                {pathname == "/assets" ? "Puff's Long Tail Assets" : "Puff's Paper"}
            </div>
            <ConnectWalletButton/>
        </nav>
    )
}

export const ConnectWalletButton = ({connectWallet}) => (
    <button onClick={connectWallet}
            className="bg-lightDark hover:bg-dark text-white font-medium h-fit px-5 py-2 rounded-xl">
        Connect
    </button>
)

export default Header
