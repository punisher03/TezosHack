import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class display extends Component {
  render() {
    return (
        <div class="content-wrapper">
    <div class="portfolio-items-wrapper">

      <div class="portfolio-item-wrapper">
        <div class="portfolio-img-background"  style="background-image:url(images/potato.png)"></div>

        <div class="img-text-wrapper">
          <div class="logo-wrapper">
           {/* <img src="images/potato.png" alt=""> --> */} 
          </div>

          <div class="subtitle">Potato</div>
        </div>
      </div>

      <div class="portfolio-item-wrapper">
        <div class="portfolio-img-background"  style="background-image:url(images/tomato.png)"></div>
        <div class="img-text-wrapper">
          

          <div class="subtitle">Tomato</div>
        </div>
      </div>

      <div class="portfolio-item-wrapper">
        <div class="portfolio-img-background" style="background-image:url(images/onion.png)"></div>
        <div class="img-text-wrapper">
          

          <div class="subtitle">Onion</div>
        </div>
      </div>

      <div class="portfolio-item-wrapper" id="veg-holder">
        <div class="portfolio-img-background" style="background-image:url(images/cauliflower.png)"></div>
        <div class="img-text-wrapper">
          

          <div class="subtitle">Cauliflower</div>
        </div>
      </div>

      <div class="portfolio-item-wrapper">
        <div class="portfolio-img-background" style="background-image:url(images/cabbage.png)"></div>
        <div class="img-text-wrapper">
          

          <div class="subtitle" id="inner-word">Cabbage.</div>
        </div>
      </div>

     

          

    </div>
  </div> 


    )
  }
}