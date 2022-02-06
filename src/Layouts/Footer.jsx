import Binance from './icons/binance.svg'
import Discord from './icons/Discord-Logo.svg'
import Medium from './icons/Medium-Logo.svg'
import Reddit from './icons/Reddit-Logo.svg'
import Telegram from './icons/Telegram-Logo.svg'
import Twitter from './icons/Twitter-Logo.svg'

export const Footer = () => {
  return (
    <div className="w-full mb-6 bg-dark text-black h-20  border-transparent rounded-3xl flex items-center justify-between p-6 space-x-4">
      <div className="flex space-x-2">
        <div className="cursor-pointer">
          <img src={Discord} className="opacity-40 hover:opacity-70 h-8 w-8" />
        </div>
        <div className="cursor-pointer">
          <img src={Medium} className="opacity-40 hover:opacity-70 h-8 w-8" />
        </div>
        <div className="cursor-pointer">
          <img src={Reddit} className="opacity-40 hover:opacity-70 h-8 w-8" />
        </div>
        <div className="cursor-pointer">
          <img src={Telegram} className="opacity-40 hover:opacity-70 h-8 w-8" />
        </div>
        <div className="cursor-pointer">
          <img src={Twitter} className="opacity-40 hover:opacity-70 h-8 w-8" />
        </div>
      </div>

      <div className="flex space-x-6 text-white ">
        <div className="opacity-40 hover:opacity-70 cursor-pointer">Gov</div>
        <div className=" opacity-40 hover:opacity-70 cursor-pointer">Docs</div>
        <div className="opacity-40 hover:opacity-70 cursor-pointer">
          Security
        </div>
        <div className="opacity-40 hover:opacity-70 cursor-pointer">
          Disclaimer
        </div>
      </div>

      <div className="cursor-pointer">
        <img src={Binance} className="opacity-40 hover:opacity-70 w-40 h-20" />
      </div>
    </div>
  )
}
