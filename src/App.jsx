'use strict'

import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Techniques from './Components/pages/Techniques'
import Retreats from './Components/pages/Retreats'
import Contact from './Components/pages/Contact'

function App() {

  return (
    <>
    <Navbar />
      <div id="app-container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/techniques" element={<Techniques />}></Route>
          <Route path="/retreats" element={<Retreats />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <div className="side-bar"></div>
    </>
  )
}

export default App