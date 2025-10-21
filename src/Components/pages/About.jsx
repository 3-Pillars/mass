'use strict'
import React from 'react'
import '../../../public/subpage.css'
import grayPillars from '../../../public/assets/symbols/pillars_1_gray_ghost.png'
import catstrofe from '../../../public/assets/catastrofe_gray.png'

function About() {
  return (
    <>
      <div className="page-body">
        <h1>LEARN MORE</h1>
        <div className="info-chunk chunk-left">
          <div className="chunk-text">
            <span>
              Our community is one of grass roots origins, founded by 3 members. 
              These pillars of the community are still influential today. 
              All three started their life feeling drawn towards a greater purpose, but not knowing what that was.
            </span>
          </div>
        </div>
        <div style={{}}>
          <img src={grayPillars} style={{width: '60%', height: '100%', margin: "auto", display: "block"}}/>
        </div>
        <div className="info-chunk chunk-left">
          <div className="chunk-text">
            <span>
              This continued until the night of August 24, 2006.
              All three were visited in their dreams by visions of Clyde Tombaugh, visiting Catastrofe where he first discovered Pluto.
              As soon as the three gathered at the site of Pluto's final descent, and felt an instant connection, both to themselves and to the masses.
            </span>
            <br /><br />
            </div>
            {/* <div >
              <img src={catstrofe} style={{width: '45%', margin: "auto", display: "block"}}/>
            </div> */}
            <br />
            <div className='chunk-text'>
            <span>
              The 3 pillars camped for multiple nights here working to uncover the reported meteors, it was through this experience that they had a transcendent experience. 
              Seeing astral materials uncovered before them they realized all of the resistance they experienced in their life was meaningless, and they found true happiness for a brief time.  
              They seek to bring this enlightening experience through all by the means of the kuiper connection.  
              Some say that the strings of fate brought the 3 founding pillars together, but together the retreat experiences create a foundation for more pillars to be built up.</span>
              <img src={catstrofe} style={{width: '45%', margin: "auto", display: "block"}}/>
              
          </div>
        </div>
      </div>
    </>
  );
}

export default About;