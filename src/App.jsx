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
  //     setLandingLogo(true)
  //   }, 3000)
  // }, [])

  console.log(sessionStorage.getItem('visited'))
  if (!sessionStorage.getItem('visited')) {
    sessionStorage.setItem('visited', true)
  }

  return (
    <>
      <div id="load-logo-container">
        <div id="pillar-box">
          <Pillar placement="left" visited={sessionStorage.getItem('visited')}/>
          <Pillar placement="center" visited={sessionStorage.getItem('visited')}/>
          <Pillar placement="right" visited={sessionStorage.getItem('visited')}/>
        </div>
        <div id="header">
          <img src={logoName} style={{width: "80%"}}/>
        </div>
      </div>
      {landingLogo 
      ? <div id="entry-button">
          <h1>Are you ready to discover your truest self?</h1>
          <a href={'/home'}><button>Yes</button></a>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in leo at tellus ultricies laoreet.</p>
          <p>Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque, aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.</p>
          <p>Aenean ac pellentesque ante. In hac habitasse platea dictumst. Nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada est ipsum tempor nisi. Phasellus auctor et turpis ultrices fermentum. Mauris ac orci sapien. Quisque auctor, mi eu vestibulum dictum, nisl felis pulvinar dui, non dictum justo tellus a urna. Morbi suscipit et odio a feugiat. Sed dui nisi, iaculis a lacus posuere, dictum laoreet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <p>Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum orci condimentum eu. Donec condimentum condimentum ligula ut placerat. Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.</p>
          <p>Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet, hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus metus nisi quis enim.</p>
        
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in leo at tellus ultricies laoreet.</p>
          <p>Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque, aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.</p>
          <p>Aenean ac pellentesque ante. In hac habitasse platea dictumst. Nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada est ipsum tempor nisi. Phasellus auctor et turpis ultrices fermentum. Mauris ac orci sapien. Quisque auctor, mi eu vestibulum dictum, nisl felis pulvinar dui, non dictum justo tellus a urna. Morbi suscipit et odio a feugiat. Sed dui nisi, iaculis a lacus posuere, dictum laoreet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <p>Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum orci condimentum eu. Donec condimentum condimentum ligula ut placerat. Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.</p>
          <p>Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet, hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus metus nisi quis enim.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in leo at tellus ultricies laoreet.</p>
          <p>Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque, aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.</p>
          <p>Aenean ac pellentesque ante. In hac habitasse platea dictumst. Nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada est ipsum tempor nisi. Phasellus auctor et turpis ultrices fermentum. Mauris ac orci sapien. Quisque auctor, mi eu vestibulum dictum, nisl felis pulvinar dui, non dictum justo tellus a urna. Morbi suscipit et odio a feugiat. Sed dui nisi, iaculis a lacus posuere, dictum laoreet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <p>Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum orci condimentum eu. Donec condimentum condimentum ligula ut placerat. Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.</p>
          <p>Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet, hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus metus nisi quis enim.</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mattis turpis eu neque tincidunt lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam auctor ultrices tortor et volutpat. Donec eu semper orci, eu fermentum orci. Vivamus aliquam lobortis egestas. Proin vel mauris vitae sem auctor cursus. Aenean sit amet odio at magna pharetra luctus nec eget urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent in leo at tellus ultricies laoreet.</p>
          <p>Duis nec nisi a eros dictum euismod nec non enim. Donec augue neque, aliquam id finibus a, volutpat ut ligula. Nam feugiat odio elit, ut molestie mi tempus vel. Etiam vitae velit eget massa scelerisque hendrerit cursus vel justo. Sed eget euismod lectus. Morbi tincidunt diam ac diam tempor molestie. Mauris eget lectus leo. Etiam id porta turpis.</p>
          <p>Aenean ac pellentesque ante. In hac habitasse platea dictumst. Nullam efficitur, dolor ac pharetra iaculis, sem elit maximus ex, et malesuada est ipsum tempor nisi. Phasellus auctor et turpis ultrices fermentum. Mauris ac orci sapien. Quisque auctor, mi eu vestibulum dictum, nisl felis pulvinar dui, non dictum justo tellus a urna. Morbi suscipit et odio a feugiat. Sed dui nisi, iaculis a lacus posuere, dictum laoreet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <p>Nam pulvinar congue condimentum. Pellentesque fringilla ante sed massa tincidunt feugiat. Nulla bibendum est eros, non malesuada dolor vehicula in. Morbi eu cursus arcu. Phasellus ultricies ornare lorem, non interdum orci condimentum eu. Donec condimentum condimentum ligula ut placerat. Vestibulum id neque condimentum, molestie nunc vel, suscipit turpis. Quisque orci velit, mattis et nibh non, tempor finibus erat. Nullam tristique, tortor non commodo cursus, magna turpis rhoncus leo, quis porta quam ante sed orci. Nunc vehicula imperdiet leo in vulputate. Quisque quis dolor orci.</p>
          <p>Curabitur ultrices fringilla libero sit amet porta. Nulla rhoncus venenatis euismod. Praesent non interdum sem. Nunc in nibh tincidunt, faucibus sem at, finibus turpis. Nullam vel odio blandit, tincidunt urna et, luctus lectus. Vivamus porta sem vitae turpis interdum porta eu id ligula. Fusce non nisi fringilla, malesuada metus ut, imperdiet ligula. Nunc quis lorem nibh. Duis pharetra magna vestibulum metus convallis, id mollis ligula vulputate. Sed purus est, consectetur non suscipit sit amet, hendrerit at dolor. Maecenas feugiat, quam vel ullamcorper feugiat, sapien ipsum viverra justo, id cursus metus nisi quis enim.</p>
       </div>
      : null
      }
    </>
  )
}

export default App