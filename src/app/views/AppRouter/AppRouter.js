import React, { Component } from 'react';
import { Switch, NavLink, Route, Redirect } from 'react-router-dom';
import cx from 'classnames';

import MainPage from '../../shared/components/MainPage';
import MySitesView from '../MySites';
import Menu from '../../shared/components/Menu';
import MenuItem from '../../shared/components/MenuItem';
import { withAuth } from '../../context/Auth';

import styles from './AppRouter.module.scss';

class AppRouter extends Component {
  componentDidMount() {
    const oldLK = document.getElementById('root');
    const newLK = document.getElementById('reactApp');
    oldLK.style.display = 'block';
    newLK.style.display = 'none';

    const { checkAuth, isAuthorized } = this.props;

    if (!isAuthorized) {
      checkAuth();
      newLK.style.display = 'block';
    }
  }

  componentDidUpdate(prevProps) {
    // const oldLK = document.getElementById('root');
    const newLK = document.getElementById('reactApp');
    // oldLK.style.display = 'none';
    newLK.style.display = 'block';

    const { checkAuth, isAuthorized, authError } = this.props;

    if (!isAuthorized && !authError) {
      checkAuth();
    }
  }

  render() {
    const { isAuthorized, user } = this.props;

    return (
      <div className={styles.wrapper}>
        {/* Root routes */}
        <Switch>
          <PrivateRoute permited={isAuthorized} user={user} path="/alk_new/mysites-new" component={MySitesView} />
          <PrivateRoute permited={isAuthorized} path="/alk_new/cra-app/inbox" component={MainPage} />
          <Redirect to="/alk_new/" />
        </Switch>

        {/* Menu Portal */}
        <Menu>
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <MenuItem linkTo={'/alk_new/cra-app/inbox'} name="Test menu" />
          <nav className={styles.nav}>
            <ul className={cx(styles.navList, 't-nav-list')}>
              <li className={styles.navElement}>
                <NavLink exact className={cx(styles.link, 't-link-inbox')} to="/alk_new/cra-app/inbox">
                  Inbox
                </NavLink>
              </li>
              <li className={styles.navElement}>
                <NavLink className={cx(styles.link, 't-link-outbox')} to="/alk_new/mysites-new">
                  Мои сайты
                </NavLink>
              </li>
            </ul>
          </nav>
        </Menu>
      </div>
    );
  }
}

// Private Router. Show content only for the authorized users
const PrivateRoute = ({ component: Component, permited, user, ...rest }) => (
  <Route
    {...rest}
    render={props => (permited ? <Component user={user} {...props} /> : <Redirect to="/alk_new/auth" />)}
  />
);

export default withAuth(AppRouter);
