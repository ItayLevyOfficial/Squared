import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './layouts/ScrollToTop'
import { Landing } from './landing/Landing'
import { LaunchScreenContext } from './launchEvent/LaunchEventScreen'
import { HomeScreen } from './home/HomeScreen'

function App() {
  return (
    <div className="flex justify-center w-full ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Landing />} />
            {/* <Route path="/home" element={<HomeScreen />} /> */}
            <Route path="/launch" element={<LaunchScreenContext />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
