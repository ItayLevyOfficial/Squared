import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./Home"
import Dashboard from "./Dashboard"
import Products from "./Products"
import {LaunchEventScreen} from "./launchEvent/launchEventScreen";

function App() {
  return (
    <div className="h-screen w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch-event" element={<LaunchEventScreen />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
