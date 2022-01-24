import {Header} from "./Header";
import {Body} from './Body'
import {Footer} from './Footer'

export const LaunchEventScreen = () => {
  return <ScreenPaddedContainer>
    <div className="flex flex-col items-center w-full max-w-screen-xl h-full">
      <Header className="mb-28"/>
      <Body/>
      <div className="flex-1"/>
      <Footer/>
    </div>
  </ScreenPaddedContainer>
}

export const ScreenPaddedContainer = (props) => <div
  className="w-screen h-screen bg-black flex flex-col items-center px-40 pt-10 pb-16">
  {props.children}
</div>
