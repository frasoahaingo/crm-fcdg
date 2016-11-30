import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as authActions from '../core/auth/actions';

class Header extends React.Component {

  logout = () => {
    this.props.dispatch(authActions.logout());
  };

  render () {
    const { auth, app } = this.props;

    return (
      <header className={`header ${auth.get('uid') ? 'header--connected' : ''}`}>
        <div className="header__left">
          <span className="header__logo">CRM {app.get('isConnected') ? '' : '(offline)'}</span>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
        {auth.get('uid') && (
          <span className="header__right">
            <span>{auth.get('email')}</span>
            <a href="#" onClick={this.logout}>Logout</a>
          </span>
        )}
      </header>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
    app: state.app,
  })
)(Header);
