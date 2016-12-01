import React from 'react';
import { connect } from 'react-redux';
import { Match, Redirect } from 'react-router';

const MatchWhenAuthorized = ({ component: Component, auth, ...rest }) => (
  <Match {...rest} render={props => (
    auth.get('uid') ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default connect(
  state => ({
    auth: state.auth
  })
)(MatchWhenAuthorized);