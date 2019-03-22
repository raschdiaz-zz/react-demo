import React, { Component } from "react";
import "./Statistics.css";

import { connect } from "react-redux";
import { addAuthorization } from "../../services/session/actions";
import { HttpClient } from "../../services/api";

class Statistics extends Component {
  constructor(props) {
    super(props);

    this.state = {
      httpClient: new HttpClient(),
      users: [],
      mappedUsers: []
    };

    this.getUsers();
  }

  getUsers() {
    this.state.httpClient.get("users").then(
      response => {
        console.log(response);
        this.setState({
          users: response.data,
          mappedUsers: response.data.map(user => {
            return <p key={user.id}>{user.name}</p>;
          })
        });
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div>
        <p>Statistics!</p>
        <input
          onChange={e => {
            this.props.addAuthorization({ token: e.target.value });
          }}
        />
        {this.state.mappedUsers}
      </div>
    );
  }
}

//export default Statistics;
//Connect view with redux and link actions
export default connect(
  null,
  { addAuthorization }
)(Statistics);
