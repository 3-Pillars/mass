'use strict'
import Placeholder from "../Placeholder";
import '../../../public/subpage.css'
import mapShot from '../../../public/assets/map_screenshot_proto.jpg'
import water from '../../../public/assets/water.png'
import mountain from '../../../public/assets/mountain.jpg'
import meditation from '../../../public//assets/meditation.jpg'
import tea from '../../../public/assets/tea.jpg'

function Retreats() {
  return (
    <>
    <div className="page-body">
      <div className="subpage-content">
        <h1>Learn to Navigate out in the World</h1>
        <div className="info-chunk chunk-left">
          <p>These techniques are fully explored during our 10-day all inclusive retreat in <a href="https://maps.app.goo.gl/8AFr1wDRzFzBb4rQ9">Catastrofe</a>.
          <br /><br /><br /> 
          This location is centered on the location of Tombaugh’s impact, where the meteor shower documented by Clyde Tombaugh in 1949 made impact.</p>
          <img src={mapShot} style={{width: "50%"}}/>
        </div>
        <div className="info-chunk chunk-right">
          <img src={water} style={{width: "30%"}}/>
          <p>Every member will be bathed in the cleansing waters of Minnetonka.  The water will positively charge your ions and boost your kuiper connection levels.</p>
        </div>
        <div className="info-chunk chunk-left">
          <p>Spending a week breathing in the air of Mount Hubbard will cleanse your lungs and mind. A lifestyle of clean breathing, thinking and being will elevate your awareness into the present moment.</p>
          <img src={mountain} style={{width: "50%"}}/>
        </div>
        <div className="info-chunk chunk-right">
          <img src={meditation} style={{width: "50%"}}/>
          <p>Meditation in death Valley will free you of your connection to this life and guide you to find greater purpose than your current dual awareness.</p>
        </div>
        <div className="info-chunk chunk-left">
          <p>Members will partake in a tea ceremony with tea sourced from the Bitteroot forest near the Sapphire mountains. The tea contains trace levels of crystalized Kuiper that will enhance your psychic ability.</p>
          <img src={tea} style={{width: "100%"}}/>
        </div>
      </div>
    </div>
    </>
  );
}

export default Retreats;