'use strict'
import React from 'react'
import '../../../public/subpage.css'
import grayPillars from '../../../public/assets/symbols/pillars_1_gray_ghost.png'
import catstrofe from '../../../public/assets/catastrofe_gray.png'
import walking from '../../../public/assets/walking.jpg'
import CustomLink from '../CustomLink'

function About() {
  return (
    <>
      <div className="page-body">
        <div className='subpage-content'>
          <h1>WHO WE ARE</h1>
          <span>
            At Mass Inc. we strive to bring balance back to our world and our souls. We too have also been affected by such imbalances. Which is why we know how the absence of balance can bring great hardship.
          </span>
          <br />
          <br />
          <span>
            The world has been broken for some time now, brought to us by the eternal Orange Flame of Mars and its avatars throughout history. These individuals bring chaos and harm to all in the name of order. They bring disarray as if their power is absolute, using their minions, the Arcane Silence Soldiers, at their disposal. They attempt to crush the will of the people.
          </span>
          <br />
          <br />
          <span>
            But we will not be stopped! There is power en Mass! We strive to unite all, and bring together the return of our divine hero, the outcast god. Only with him, can we bring back the force of god and hope to fight back the evil that has encumbered us.
          </span>
          <br />
          <br />
          <span>
            In order to bring cosmic alignment, we teach various techniques, such as our patented Navigation method. We also believe in people aligning themselves with the energies of The Great Restructuring on our yearly by converging at the Tip of the Sphere.
          </span>
          <br />
          <br />
          <span>
            If you are interested in joining or have any questions, you can reach out to us <CustomLink to="/contact">here</CustomLink>.
          </span>
          <br />
          <br />
          <span>
            We look forward to you joining the Mass.
          </span>
        </div>
      </div>
    </>
  );
}

export default About;