import React, { Component } from 'react';
import './Users.css';

import { connect } from "react-redux";

class Users extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.dir(this)
        return (
            <div>
                <p>Users!.</p>
                <p>{(this.props.state.authorization.authentication) ? this.props.state.authorization.authentication.token : ''}</p>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return { state };
};

//export default Users;
export default connect(mapStateToProps)(Users);