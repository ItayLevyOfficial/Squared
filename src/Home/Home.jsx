import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../launchEvent/Footer'
import Logo from '../launchEvent/icons/logo.svg'

export const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col justify-between items-center w-screen h-screen z-20 py-14 animate-fadeIn relative">
      <div className="flex flex-col items-center">
        <img src={Logo} className="object-cover mt-10 mb-14" width={140} />
        <h1 className="text-7xl -tracking-wider font-bold mb-4">Squared</h1>
        <h2 className="text-primary text-3xl font-light mb-14 tracking-wide">
          Sustainable Liquidity for Long Tail Assets
        </h2>
        <button
          type="button"
          onClick={() => navigate('/launch')}
          className="py-5 px-10 bg-darkPrimary hover:text-gold rounded-xl text-xl tracking-wider font-medium"
        >
          Enter App
        </button>
      </div>
      <Footer />
    </div>
  )
}
