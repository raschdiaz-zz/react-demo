import React, { Component } from "react";
import "./Users.css";

import HttpClient from "../../services/api";

import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../services/session/store";

class Users extends Component {
  httpClient = new HttpClient({
    usePrivateClient: false
  });

  constructor(props) {
    super(props);
    console.dir(this.props)
    this.state = {
      users: []
    };

    this.getUsers();
  }

  getUsers() {
    this.httpClient.get("users").then(response => {
      this.setState({
        users: response.data
      });
    });
  }

  render() {
    return (
      <div>
        <p>Users!.</p>
        <button onClick={this.props.showLoadingBar.bind(this)}>
          Show LoadingBar
        </button>
        <button onClick={this.props.hideLoadingBar.bind(this)}>
          Hide LoadingBar
        </button>
        <p>
          {this.props.authorization
            ? this.props.authorization.token
            : ""}
        </p>
        {this.state.users.map(user => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    );
  }
}

//export default Users;
var UsersComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UsersComponent;
