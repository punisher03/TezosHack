import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Home extends Component {
  render() {
    return (
    <div class='index'>
       <div class='farmer'>
         <h1>Farmer's Portal</h1>
         <Link className="btn btn-primary" to={"/farmer/login" }>Login</Link>
         <p> Don't have an account yet? Sign Up!</p>
       <Link to={"/farmer/signup" }>Signup</Link>
       </div>
       <div class='buyer'>
       <h1>Buyer's Portal</h1>
       <Link className="btn btn-primary" to={"/buyer/login" }>Login</Link>
       <p> Don't have an account yet? Sign Up!</p>
       <Link to={"/buyer/signup" }>Signup</Link>
       </div>
    </div>
    )
  }
}