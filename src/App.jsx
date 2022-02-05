import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ScrollToTop from './layouts/ScrollToTop'
import { Home } from './Home/Home'
import { LaunchEventScreen } from './launchEvent/LaunchEventScreen'

function App() {
  return (
    <div className="flex justify-center w-full ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/launch" element={<LaunchEventScreen />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
