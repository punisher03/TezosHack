mport React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Intro extends Component {
  render() {
    return (
    <div>
        <div class="img">
          <div id="bottom-area">
            <h1> FARMEX - BUY AND SELL USING CRYPTOCURRENCY</h1>
              <br/><H2>LOG IN TO BUY DIRECTLY FROM FARMERS USING CRYPTOCURRENCY! </h2><br/>
            <div>
              <img src="images/fruitbasket.jpg"/>

            </div >
           <div class="button"> <a href="login.html">LOGIN</a> </div>
          </div>
        </div>
    </div>
    )
  }
}