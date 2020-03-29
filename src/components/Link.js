import React, { Component } from "react";
import { PlaidLink } from "react-plaid-link";
import axios from "axios";
import Table from "./Table";

export default class Links extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
      transdata: []
    };
    this.handleCLick = this.handleClick.bind(this);
    //    this.handleother = this.handleother.bind(this);
  }

  handleOnSuccess(public_token, metadata) {
    // send token to client server
    axios.post("/auth/public_token", {
      public_token: public_token
    });
  }

  handleOnExit() {
    // handle the case when your user exits Link
    // For the sake of this tutorial, we're not going to be doing anything here.
  }
  handleClick = res => {
    axios.get("/transactions").then(res => {
      this.setState({ transactions: res.data });
      console.log(this.state.transactions);
    });
  };

  transactionsColumns = [
    { title: "Account", field: "account" },
    { title: "Date", field: "date", type: "date", defaultSort: "desc" },
    { title: "Name", field: "name" },
    { title: "Amount", field: "amount", type: "numeric" },
    { title: "Category", field: "category" }
  ];

  render() {
    return (
      <div>
        <PlaidLink
          clientName="React Plaid Setup"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="2d23bdf36ae634cd15f94ee36a4bc4"
          onExit={this.handleOnExit}
          onSuccess={this.handleOnSuccess}
          className="test"
        >
          Open Link and connect your bank!
        </PlaidLink>
        <div>
          <button style={{ marginTop: "0.5rem" }} onClick={this.handleClick}>
            Get Transactions
          </button>
        </div>
        {/* {this.state.transactions.map(account=>  <p>{account.official_name}</p>)} */}

        {console.log(this.state.transactions)}
      </div>
    );
  }
}
