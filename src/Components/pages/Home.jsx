'use strict'
import logo from '../../assets/logo.png'
import { Carousel } from '../Carousel';
import ImageSlider from '../ImageSlider';
import { slides } from "../../data/carousselData.json"
import { SliderData } from '../../data/SliderData';
import Slider from "../Slider";
import JimmyCarousel from '../JimmyCarousel';


function Home() {
  return (
    <>
      {/* <Carousel data={slides}/> */}
      {/* <ImageSlider slides={SliderData} />; */}
      {/* <Slider /> */}
      {/* <div className='background-image'><img src={logo} /></div> */}
      {/* <JimmyCarousel /> */}
      <div class="demo-wrap">
        <div class="demo-content">
          <div className='demo-block'>
          <h1>Hello World!</h1>
          </div>
          <br />
          <div className='demo-block'>
          <h1>Learn More</h1>
          </div>
        </div>
      </div>
      <div className='page-body'>
      <h1>Mission Statement</h1>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
      <div className='inline-photo-graph photo-left'>
        <img src={logo} style={{width: "30%"}}/>
        <div>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
        </div>
      </div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
      <div className='inline-photo-graph photo-right'>
        <div>
          <span>REIGHTEREHASDRFASERLorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
        </div>
        <img src={logo} style={{width: "30%"}}/>
      </div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula nibh vel libero tempus, ut placerat dolor blandit. Donec blandit, quam quis elementum eleifend, diam massa egestas odio, ut iaculis turpis metus lacinia eros. Suspendisse euismod lectus non lectus consectetur, consectetur tempor magna elementum. Morbi dapibus pulvinar tincidunt. Nulla convallis urna ut leo semper, eget pretium eros placerat. Vestibulum efficitur nunc nec lacinia rhoncus. Morbi tempus tempus lorem ac consequat. Curabitur a erat vel magna posuere porta accumsan at nibh. Fusce et diam justo. Etiam ac erat libero. Aliquam erat volutpat. In accumsan tellus eros, sed dignissim nisl euismod sed. Aliquam tincidunt egestas consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
      </div>
    </>
  );
}

export default Home;