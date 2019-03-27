import React, { Component } from "react";
import "./Users.css";

import { connect } from "react-redux";

import HttpClient from "../../services/api";

class Users extends Component {
  httpClient = new HttpClient({
    usePrivateClient: false
  });

  constructor(props) {
    super(props);

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
    console.dir(this);
    return (
      <div>
        <p>Users!.</p>
        <p>
          {this.props.state.authorization
            ? this.props.state.authorization.token
            : ""}
        </p>
        {this.state.users.map(user => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    );
  }
}

//Get Redux's Store State
const mapStateToProps = state => {
  return { state };
};

//export default Users;
export default connect(mapStateToProps)(Users);
