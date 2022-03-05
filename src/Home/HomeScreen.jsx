import { Footer } from '../launchEvent/Footer'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { Header } from '../layouts/Header'
import { HomeScreenBody } from './HomeScreenBody'

export const HomeScreen = () => {
  return (
    <ScreenPaddedContainer>
      <div className="flex flex-col items-center justify-between w-full max-w-screen-2xl h-full">
        <Header />
        <HomeScreenBody />
        <Footer />
      </div>
    </ScreenPaddedContainer>
  )
}
