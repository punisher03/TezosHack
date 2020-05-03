import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home"
import App1 from "./components/SellerDashboard";
import Blogin from "./components/Blogin";
import Bsignup from "./components/Bsignup";
import Fsignup from "./components/Fsignup";
import Flogin from "./components/Flogin";
import Transaction from "./components/Transaction"


export default class App extends Component{


  render(){
    return (
      <Router>
        <div className="app">
          {<Route path="/" exact component={ Home } />}
          <Route path="/buyer/signup" exact component={ Bsignup } />
          <Route path="/buyer/login" exact component={ Blogin }/>
          <Route path="/buyer/dashboard" exact component={ App1 }/>
          <Route path="/farmer/signup" exact component={ Fsignup }/>
          <Route path="/farmer/login" exact component={ Flogin }/>
          <Route path="/transaction" exact component={ Transaction }/>
        </div>
      </Router>
    );
  }

}


