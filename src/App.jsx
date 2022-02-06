import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './layouts/ScrollToTop'
import { Home } from './Home/Home'
import { Products } from './products/Products'
import { Dashboard } from './dashboard/Dashboard'
import { LaunchEventScreen } from './launchEvent/LaunchEventScreen'

function App() {
  return (
    <div className="flex justify-center w-full ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/launch" element={<LaunchEventScreen />} />
            <Route path="/assets" element={<Products />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
