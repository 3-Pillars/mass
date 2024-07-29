'use strict'

import './App.css'
import Pillar from "./Components/Pillar"
import logoName from './assets/white_transparent_logo_name.png'

function App() {

  return (
    <>
      <h1>Header</h1>
      <div id="app-container">
        <div id="pillar-box">
          <Pillar placement="left"/>
          <Pillar placement="center"/>
          <Pillar placement="right"/>
        </div>
        <div id="header">
          <img src={logoName} style={{width: "80%"}}/>
        </div>
      </div>
    </>
  )
}

export default App