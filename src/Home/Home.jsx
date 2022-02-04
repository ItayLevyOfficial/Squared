import Video from './icons/landing.mp4'
import Heading from './icons/heading.svg'
import { Footer } from '../launchEvent/Footer'
import Logo from '../layouts/icons/goldlogo.svg'

const Home = () => {
  return (
    <div className="w-screen h-screen">
      <video
        className="h-full w-full z-0 absolute opacity-20"
        autoPlay
        muted
        loop
      >
        <source src={Video} type="video/mp4" />
      </video>

      <div className="flex flex-col justify-between items-center h-full w-full z-10 pb-14">
        <div className="h-full flex flex-col justify-center items-center space-y-10">
          <img src={Heading} alt="" className="animate-fadeIn -mb-14" />

          <h1 className="text-gold text-4xl text-baloo opacity-70">
            Sustainable Liquidity for Long Tail Assets
          </h1>
          <button
            type="button"
            className="p-5 text-lg bg-black opacity-80 hover:text-gold transition ease-in-out duration-200 rounded-xl w-40"
          >
            <a href="/launch">Connect Wallet</a>
          </button>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
