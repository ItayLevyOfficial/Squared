import { Footer } from '../launchEvent/Footer'
import { ScreenPaddedContainer } from '../launchEvent/LaunchEventScreen'
import { Header } from '../Layouts/Header'
import { HomeScreenBody } from './HomeScreenBody'

export const HomeScreen = () => {
  return (
    <ScreenPaddedContainer>
      <Header />
      <HomeScreenBody />
      <Footer />
    </ScreenPaddedContainer>
  )
}
