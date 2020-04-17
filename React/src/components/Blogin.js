import React, { Component } from 'react';
import axios from 'axios';

export default class Blogin extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email:"",
      password:"",

    }
  }



  onChangePassword(e){
    this.setState(
      {
          password: e.target.value
      }
    )
  }


  onChangeEmail(e){
    this.setState({
        email: e.target.value
      })
  }


  async onSubmit(event) {
    event.preventDefault();

    const form = {
        password: this.state.password,
        email: this.state.email
      };

      axios.post('http://localhost:5000/buyer/login', form)
      .then(res => console.log(res.data));


  }

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit}>

        <div className="form-group"> 
          <label>Enter Your Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <label>Enter Your Password: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}