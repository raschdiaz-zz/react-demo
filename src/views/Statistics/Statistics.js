import React, { Component } from "react";
import "./Statistics.css";

import { connect } from "react-redux";
import { addAuthorization } from "../../services/session/actions";
//import { Subscribe } from "unstated";
import HttpClient from "../../services/api";

class Statistics extends Component {
  httpClient = new HttpClient({
    usePrivateClient: false
  });

  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };

    this.getPosts();
  }

  getPosts() {
    this.httpClient.get("posts").then(
      response => {
        this.setState({
          posts: response.data
        });
      },
      error => {
        console.error(error);
      }
    );
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
    //<Subscribe to={} -> Set Subscription to HttpClient with created instance
    /*
    <Subscribe to={[this.httpInstance]}>
        {httpClient => (
          
        )}
      </Subscribe>
    */
  }
}

//export default Statistics;
//Connect view with redux and link actions
export default connect(
  null,
  { addAuthorization }
)(Statistics);
