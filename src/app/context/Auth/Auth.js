import React, { Component } from 'react';
import { environment } from '../../../environment';
import getCookie from './getCookie';

const { Provider, Consumer } = React.createContext('');

class AuthProvider extends Component {
  state = {
    isAuthorized: false,
    authError: '',
    user: {
      uid: {
        someShit: '',
        uniple: '',
      },
      token: {
        someShit: '',
        uniple: '',
      },
    },
  };

  checkAuth = () => {
    let user = {
      uid: {
        someShit: getCookie(environment.SOME_SHIT_COOKIE_ID),
        uniple: getCookie(environment.UNIPLE_COOKIE_ID),
      },
      token: {
        someShit: getCookie(environment.SOME_SHIT_COOKIE_TOKEN),
        uniple: getCookie(environment.UNIPLE_COOKIE_TOKEN),
      },
    };

    if (environment.DEBUG) {
      user.uid.someShit = String(environment.DEBUG_UID);
      user.token.someShit = environment.DEBUG_SOME_SHIT_TOKEN;
      user.token.uniple = environment.DEBUG_UNIPLE_TOKEN;
    }

    if (!user.uid.someShit && !user.uid.uniple) {
      this.setState({ authError: 'Access denied' });
    } else {
      this.setState({ isAuthorized: true, authError: '', user });
    }
  };

  getProviderValue = () => {
    const { isAuthorized, authError, user } = this.state;
    return {
      isAuthorized,
      checkAuth: this.checkAuth,
      authError,
      user,
    };
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const withAuth = WrappedComponent => {
  class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return <Consumer>{contextProps => <WrappedComponent {...contextProps} {...rest} />}</Consumer>;
    }
  }

  return AuthHOC;
};

export { AuthProvider, withAuth };
