import React, {Component} from 'react';
import Notifications from './notification';
import ProjList from '../project/projectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class Dash extends Component {


  render(){
  
    const {hive, auth} = this.props;


    return(

      <div className = "dashboard container">
        <div className = "row">
          <div className = "col s12 m6">
            <ProjList projects = {hive}/>
          </div>
            <div className = "col s12 m5 offset-m1">
              <Notifications/>
            </div>
        </div>

      </div>

    )

  }


}

const mapStateToProps = (state) => {

  return{
    hive: state.firestore.ordered.hives,
    auth: state.firebase.auth

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'hives'}
  ])
)(Dash)
