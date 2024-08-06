'use strict'

import './App.css'
import './index.css'
import Pillar from "./Components/Pillar"
import logoName from './assets/white_transparent_logo_name.png'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function App() {

  const navigate = useNavigate()
  const [landingLogo, setLandingLogo] = useState(true)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLandingLogo(false)
  //   }, 3000)
  // }, [])

  return (
    <>
      {
        landingLogo
        ? <div id="load-logo-container">
            <div id="pillar-box">
              <Pillar placement="left"/>
              <Pillar placement="center"/>
              <Pillar placement="right"/>
            </div>
            <div id="header">
              <a href={'/home'}><img src={logoName} style={{width: "80%"}}/></a>
            </div>
          </div>
        : <div id="entry-button">
          <h1>Are you ready to discover your truest self?</h1>
          <a href={'/home'}><button>Yes</button></a>
        </div>
      }
    </>
  )
}

export default App