import React, {Component} from 'react';
import Notifications from './notification';
import ProjList from '../project/projectList';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

class Dash extends Component {


  render(){
  
    const {house, auth} = this.props;


    return(

      <div className = "dashboard container">
        <div className = "row">
          <div className = "col s12 m6">
            <ProjList projects = {house}/>
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
    house: state.firestore.ordered.houses,
    auth: state.firebase.auth

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'houses'}
  ])
)(Dash)
