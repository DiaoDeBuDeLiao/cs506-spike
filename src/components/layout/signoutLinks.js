import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const SignedOutLinks = () => {

  return(
    <ul className="right">
      <li><NavLink to="/signup">Sign Up</NavLink></li>
      <li><NavLink to="/signin">Login</NavLink></li>
      <li><NavLink to="/">Manage</NavLink></li>
    </ul>
  )

}

export default SignedOutLinks;
