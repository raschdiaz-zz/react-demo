import React, { Component } from "react";
import "./Statistics.css";

import HttpClient from "../../services/api";

import { connect } from "react-redux";
import {
  mapStateToProps,
  mapDispatchToProps
} from "../../services/session/store";

class Statistics extends Component {
  httpClient = new HttpClient();

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
    console.dir(this.props);
    this.getPosts();
  }

  getPosts() {
    this.httpClient.get("posts").then(response => {
      this.setState({
        posts: response.data
      });
    });
  }

  showAlert() {
    alert("Test alert!.");
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
        <button onClick={this.showAlert.bind(this)}>Test</button>
        {this.state.posts.map(post => {
          return <p key={post.id}>{post.title}</p>;
        })}
      </div>
    );
  }
}

//export default Statistics;

var StatisticsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics);

export default StatisticsComponent;
