import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './layouts/ScrollToTop'
import { Home } from './Home/Home'
import React from 'react'
import { AssetsInformation } from './products/AssetsInformation'
import { DashboardInformation } from './dashboard/DashboardInformation'
import { LaunchScreenContext } from './launchEvent/LaunchEventScreen'

function App() {
  return (
    <div className="flex justify-center w-full ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/launch" element={<LaunchScreenContext />} />
            <Route path="/assets" element={<AssetsInformation />} />
            <Route path="/dashboard" element={<DashboardInformation />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
