import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Dashboard from './Dashboard'
import Products from './Products'
import ScrollToTop from './Layouts/ScrollToTop'

function App() {
  return (
    <div className="flex justify-center w-full">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
