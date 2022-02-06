import Discord from './icons/Discord-Logo.svg'
import Medium from './icons/Medium-Logo.svg'
import Twitter from './icons/Twitter-Logo.svg'

export const Footer = () => {
  return (
    <div className="max-w-main bg-dark text-black h-20  border-transparent rounded-3xl flex items-center justify-between mx-6 p-6">
      <div className="flex space-x-2">
        <div className="cursor-pointer">
          <img src={Discord} className="opacity-40 hover:opacity-70 h-8 w-8" />
        </div>
        <div className="cursor-pointer">
          <img src={Medium} className="opacity-40 hover:opacity-70 h-8 w-8" />
        </div>
        <div className="cursor-pointer">
          <img src={Twitter} className="opacity-40 hover:opacity-70 h-8 w-8" />
        </div>
      </div>

      <div className="flex space-x-6 text-white ">
        <div className=" opacity-40 hover:opacity-70 cursor-pointer">Docs</div>
        <div className="opacity-40 hover:opacity-70 cursor-pointer">
          Security
        </div>
        <div className="opacity-40 hover:opacity-70 cursor-pointer">
          Disclaimer
        </div>
      </div>
    </div>
  )
}
