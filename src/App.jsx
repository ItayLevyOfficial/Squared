import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './layouts/ScrollToTop'
import { Home } from './Home/Home'
import React from 'react'
import { Products } from './products/Products'
import { Dashboard } from './dashboard/Dashboard'
import { LaunchEventScreen } from './launchEvent/LaunchEventScreen'
import { LastLookScreen } from './lastLook/lastLookScreen'

function App() {
  return (
    <div className="flex justify-center w-full ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/last-look" element={<LastLookScreen />} />
            <Route path="/launch" element={<LaunchEventScreen />} />
            <Route path="/assets" element={<Products />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
