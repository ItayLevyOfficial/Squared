import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './layouts/ScrollToTop'
import { Home } from './Home/Home'
import { Products } from './products/Products'

function App() {
  return (
    <div className="flex justify-center w-full ">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
