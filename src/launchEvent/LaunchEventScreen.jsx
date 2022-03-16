import { createContext } from 'react'
import { Footer } from './Footer'
import { LaunchScreenBody } from './LaunchScreenBody'
import { LaunchScreenHeader } from './LaunchScreenHeader'
export const StageContext = createContext(1)

export const RoutingButton = ({ children, currentStage, buttonStage, setStage }) => (
  <button
    onClick={() => setStage(buttonStage)}
    className={`w-48 py-3 font-medium text-lg rounded-full text-center ${
      currentStage === buttonStage
        ? 'bg-darkPrimary'
        : 'border-solid border-[0.5px] border-white'
    }`}
  >
    {children}
  </button>
)

export const LaunchEventScreen = () => (
  <ScreenPaddedContainer>
    <LaunchScreenHeader />
    <LaunchScreenBody className={'-mt-20'} />
    <Footer />
  </ScreenPaddedContainer>
)

export const ScreenPaddedContainer = (props) => (
  <div className="w-screen max-w-screen-2xl h-screen bg-black flex flex-col items-center justify-between px-16 pt-10 pb-16">
    {props.children}
  </div>
)
