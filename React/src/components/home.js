import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Header, List } from "semantic-ui-react";


export default class Home extends Component {
  render() {
    return (
    <Container style={{ margin: 20 }}>
      <Header as="h3">Tezos Farmer's Marketplace 😊</Header>
      <List bulleted>
      <div>
        <List.Item
          as="a"
          content="Made using 💌 Conseil Js"
          href="https://github.com/Cryptonomic/ConseilJS"
          target="_blank"
        />
      </div>
      <div>
        <List.Item
          as="a"
          content="Thanks to Tezos"
          href="https://tezos.com/"
          target="_blank"
        />
      </div>
      </List>

    <div><br></br>
    <div class='row'>
       <div class='col-6'>
         <h4>Farmer's Portal</h4>
         <Link className="btn btn-primary" to={"/farmer/login" }>Login</Link>
         <p> Don't have an account yet? Sign Up!</p>
       <Link to={"/farmer/signup" }>Signup</Link>
       </div>
       <div class='col-6'>
       <h4>Buyer's Portal</h4>
       <Link className="btn btn-primary" to={"/buyer/login" }>Login</Link>
       <p> Don't have an account yet? Sign Up!</p>
       <Link to={"/buyer/signup" }>Signup</Link>
       </div>
    </div>
    </div>
  </Container>

    )
  }
}
