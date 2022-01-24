import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Dashboard from './Dashboard'
import Products from './Products'
import ScrollToTop from './Layouts/ScrollToTop'
import {LaunchEventScreen} from "./launchEvent/LaunchEventScreen"
import {AccountStatus} from './launchEvent/AccountStatus'

function App() {
  return (
    <div className="flex justify-center w-full">
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/launch" element={<LaunchEventScreen/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/testing" element={<AccountStatus/>}/>
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App
