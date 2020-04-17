import React, { Component } from 'react';
import axios from 'axios';

export default class Fsignup extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeId = this.onChangeId.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePno = this.onChangePno.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name:"",
      email:"",
      id:"",
      password:"",
      pno:"",
      location:""
    }
  }


  onChangeName(e){
      this.setState(
        {
            name: e.target.value
        }
      )
  }

  onChangeId(e){
    this.setState(
      {
          id: e.target.value
      }
    )
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

  onChangePno(e){
    this.setState({
        pno: e.target.value
      })
  }

  onChangeLocation(e){
    this.setState({
        location: e.target.value
      })
  }

  async onSubmit(event) {
    event.preventDefault();

    const form = {
        _id : this.state.id,
        name: this.state.name,
        password: this.state.password,
        pno: this.state.pno,
        email: this.state.email,
        location: this.state.location
      };

      axios.post('http://localhost:5000/farmer/signup', form)
      .then(res => console.log(res.data));


  }

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
        <label>Enter Your  Eth Address: </label>
        <input  type="text"
              required
              className="form-control"
              value={this.state.id}
              onChange={this.onChangeId}
              />
        </div>
        <div className="form-group"> 
        <label>Enter Your  Name: </label>
        <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
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
          <label>Enter your Phone Number: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.pno}
              onChange={this.onChangePno}
              />
        </div>
        <div className="form-group">
          <label>Enter your Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Signup" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}