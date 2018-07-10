import React, { Component } from 'react';
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import { throwServerError } from '../../node_modules/apollo-link-http-common';

export default class UserForm extends Component {
    state = {
        login: true
    }
  render() {
      const {user, client } = this.props;
      const { login } = this.state;
    if(user._id) {
        return (
            <button
            onClick={() => {
              Meteor.logout();
              client.resetStore();
            }}
            >
            Logout
            </button>
          )
        }
    return (
        <div>
            {login ? (
              <LoginForm client={client} />
            ) : (
              <RegisterForm client={client} />
            )}
            <button onClick={() => this.setState({
                login: !login
                })}>
                {login ? 'Register' : 'Login'}
            </button>
        </div>
    )
  }
}
