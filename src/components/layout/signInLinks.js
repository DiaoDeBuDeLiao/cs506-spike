import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedInLinks = (props) => {

  return(
    <ul className="right">
      <li><NavLink to="/CreateHouse">Add Houses</NavLink></li>
      <li><NavLink to="/">View Houses</NavLink></li>
      <li><a onClick={props.signOut}> Sign Out</a> </li>
      <li><NavLink to="/" className="btn btn-floating">{props.profile.initials}</NavLink></li>

    </ul>
  )

}

const mapDispatchToProps = (dispatch) =>{

  return{
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
