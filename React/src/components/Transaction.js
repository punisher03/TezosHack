import React, { Component } from 'react';
import axios from 'axios';

export default class Transaction extends Component {
  constructor(props) {
    super(props);

    this.onChangeMnemonic = this.onChangeMnemonic.bind(this);
    this.onChangeSecret = this.onChangeSecret.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePkh = this.onChangePkh.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      mnemonic:"",
      email:"",
      secret:"",
      password:"",
      pkh:""
    }
  }


  onChangeMnemonic(e){
      this.setState(
        {
            mnemonic: e.target.value
        }
      )
  }

  onChangeSecret(e){
    this.setState(
      {
          secret: e.target.value
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

  onChangePkh(e){
    this.setState({
        pkh: e.target.value
      })
  }

  async onSubmit(event) {
    event.preventDefault();

    const tezosNode = 'https://tezos-dev.cryptonomic-infra.tech:443';
    const conseiljs = require('conseiljs');

    const faucetAccount = {
        mnemonic : this.state.mnemonic,
        secret: this.state.secret,
        password: this.state.password,
        pkh: this.state.pkh,
        email: this.state.email
      };
      const keystore = await conseiljs.TezosWalletUtil.unlockFundraiserIdentity(faucetAccount.mnemonic, faucetAccount.email, faucetAccount.password, faucetAccount.pkh);
      console.log(keystore);
      const result = await conseiljs.TezosNodeWriter.sendTransactionOperation(tezosNode, keystore, 'tz1PqNuxGjvB94RubHtGeHzRFgyCU18k9YwC', 500000, 1500, '');
      console.log(`Injected operation group id ${result.operationGroupID}`);


  }

  render() {
    return (
    <div>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
        <label>Enter Your Mnemonic: </label>
        <input  type="text"
              required
              className="form-control"
              value={this.state.mnemonic}
              onChange={this.onChangeMnemonic}
              />
        </div>
        <div className="form-group"> 
        <label>Enter Your  Secret: </label>
        <input  type="text"
              required
              className="form-control"
              value={this.state.secret}
              onChange={this.onChangeSecret}
              />
        </div>
        <div className="form-group"> 
          <label>Enter Your Public Key Hash(pkh): </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.pkh}
              onChange={this.onChangePkh}
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
          <label>Enter your Email: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Send" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}