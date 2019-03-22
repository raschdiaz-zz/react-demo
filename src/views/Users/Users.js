import React, { Component } from "react";
import "./Users.css";

import { connect } from "react-redux";

class Users extends Component {
  /*constructor(props) {
        super(props);
    }*/

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
