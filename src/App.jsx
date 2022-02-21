import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './layouts/ScrollToTop'
import { Home } from './Home/Home'
import React from 'react'
import { Products } from './products/Products'
import { Dashboard } from './dashboard/Dashboard'
import { LaunchScreenContext } from './launchEvent/LaunchEventScreen'

function App() {
  return (
    <div className="flex justify-center w-full ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/launch" element={<LaunchScreenContext />} />
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
