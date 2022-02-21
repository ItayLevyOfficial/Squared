import Video from './icons/landing.mp4'
import { Footer } from '../launchEvent/Footer'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const SquaredLogo = ({ className = '' }) => (
  <svg className={className} width="486" height="486" viewBox="0 0 486 486" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="243" cy="243" r="243" fill="black"/>
<path d="M355 171L243 115L131 171V315L243 371L355 315V171Z" fill="#FBFCD4"/>
<path d="M243 227L131 171V315L243 371L355 315V171L243 227Z" fill="#FFDD03"/>
<path d="M243 227V371L355 315V171L243 227Z" fill="#FBC403"/>
</svg>

)

export const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="w-screen h-screen">
      <video
        src={Video}
        autoPlay
        muted
        className="absolute h-screen w-screen object-cover -z-20"
        loop
      />
      <div className="absolute w-screen h-screen bg-[#000000] -z-10 opacity-80" />
      <div className="flex flex-col justify-between items-center h-full w-full z-20 py-14 animate-fadeIn relative">
        <div className="flex flex-col items-center space-y-8 mt-5">
          <SquaredLogo className="h-48 w-48 object-cover" />
          <h1 className="text-7xl -tracking-wider font-bold">Squared</h1>
          <h2 className="text-primary text-3xl font-light tracking-wide">
            Sustainable Liquidity for Long Tail Assets
          </h2>
          <button
            type="button"
            onClick={() => navigate('/launch')}
            className="py-5 px-10 bg-black hover:text-primary rounded-xl text-xl tracking-wider"
          >
            Coming Soon
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}
