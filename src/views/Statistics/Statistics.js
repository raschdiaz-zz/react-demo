import React, { Component } from 'react';
import './Statistics.css';

import { connect } from "react-redux";
import { addAuthorization } from "../../services/session/actions";

class Statistics extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Statistics!</p>
                <input onChange={e => {
                    this.props.addAuthorization({ token: e.target.value });
                }}></input>
            </div>
        );
    }
}

//export default Statistics;
//Connect view with redux, link actions ?
export default connect(null, { addAuthorization })(Statistics);