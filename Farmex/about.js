import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './components/css/style.css';
import './component/css/style-navbar.css';


export default class About extends Component {
  render() {
    return (
      /*<>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Farmex</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#login">LOGIN</Nav.Link>
          </Nav>
         
        </Navbar>
        <br />
        
      </> */
       
        <div>
        <h1>  Hello, and welcome to Farmex! </h1>
        <p>
          The original idea behind this application is to link farmers directly with consumers, where they can interact 
          and sell their products. Buyers can pay the farmers directly with cryptocurrency and farmers can ensure a better
          price for their produce, as an intermediary bank or financial institution is not involved who take a commission for 
          financial transactions. <br/>
          The main problem faced by farmers in India is not getting a fair price for their produce, as too many intermediaries 
          are involved who take a large portion of the consumer price. To enable the farmers get a fair quote, Farmex let's the farmer 
          set his price and sell it to the buyers who are interested, and let's the buyer pay the price using Tezos (XTZ),
          a widely used cryptocurrency.
        </p>

        <p>
          For this project, we have used ReactJS to build user interface, which include HTML and CSS. MongoDB is the database software
          used to store the data entered by the buyer and seller as well as the interactions between them.
        </p>
      </div>
    )
  }
}

