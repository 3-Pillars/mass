'use strict'
import logo from '../../assets/logo.png'
import JimmyCarousel from '../JimmyCarousel';
import Placeholder from '../Placeholder';


function Home() {
  return (
    <>
      <JimmyCarousel />
      <div className='page-body'>
        <h1>Mission Statement</h1>
        <Placeholder />
      </div>
    </>
  );
}

export default Home;