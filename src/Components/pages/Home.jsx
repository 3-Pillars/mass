'use strict'
import logo from '../../assets/logo.png'
import { Carousel } from '../Carousel';
import { slides } from "../../data/carousselData.json"

function Home() {
  return (
    <>
      <Carousel data={slides}/>

        {/* <img src={logo} style={{width: '50%'}}></img> */}
    </>
  );
}

export default Home;