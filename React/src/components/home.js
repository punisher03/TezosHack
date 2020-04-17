import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
    <div class='index'>
       <div class='farmer'>
       <Link to={"/farmer/signup" }>Signup</Link>
       <Link to={"/farmer/login" }>Login</Link>
       </div>
       <div class='buyer'>
       <Link to={"/buyer/signup" }>Signup</Link>
       <Link to={"/buyer/login" }>Login</Link>
       </div>
    </div>
    )
  }
}