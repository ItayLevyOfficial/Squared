import { Header } from './Header'
import { Body } from './Body'
import { Footer } from './Footer'
import Dragon from './icons/dragon.png'

export const LaunchEventScreen = () => {
  return (
    <ScreenPaddedContainer>
      <div className="flex flex-col items-center w-full max-w-screen-xl h-full">
        <Header className="mb-28" />
        <Body />
        <div className="flex-1" />
        <Footer />
      </div>
      <img src={Dragon} alt="" className="fixed bottom-6 left-6 z-0" />
    </ScreenPaddedContainer>
  )
}

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen h-screen bg-black flex flex-col items-center px-40 pt-10 pb-16">
    {props.children}
  </div>
)
