import { useState } from 'react'
import './App.css'
import Pillar from "./Components/Pillar"

function App() {

  return (
    <>
      <div id="app-container">
        <div id="pillar-box">
          <Pillar />
          <Pillar />
          <Pillar />
        </div>
        <div id="header">
          <h1>Mass Inc.</h1>
        </div>
      </div>
    </>
  )
}

export default App