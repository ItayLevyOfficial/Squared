import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from './Home/Home'
import { ScrollToTop } from './layouts/ScrollToTop'

function App() {
  return (
    <div className="flex justify-center w-full ">
      <Router>
        <ScrollToTop>
          <Routes>
            {/* <Route path="/launch" element={<LaunchScreenContext />} /> */}
            {/* <Route path="/assets" element={<Products />} /> */}
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="*" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
