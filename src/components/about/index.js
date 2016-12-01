import React from 'react';
import { connect } from 'react-redux';

const About = ({ auth }) => (
  <div>
    <h1>About</h1>
    {auth.get('uid') ? <span>Bonjour</span> : <span>C KI?</span>}
  </div>
);

export default connect(
  state => ({
    auth: state.auth
  })
)(About);