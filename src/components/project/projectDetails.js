import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {Redirect} from 'react-router-dom';

const ProjDetails = (props) => {
  const {hive, auth} = props;

  if (!auth.uid){
    return <Redirect to='/signin'/>
  }
  if (hive){
    return(
    <div className = "container section project-details">
      <div className = " card z-depth-0">
        <div className = "card-content">
          <span className = "card-title"> {hive.title}</span>
          <p> {hive.gains} </p>

        </div>
        <div className = 'card-action grey-lighten-4 grey-text'>
          <div> Posted By {hive.authorFirstName} {hive.authorLastName} </div>
        </div>
      </div>

    </div>
  );

  }else{
    return(
      <div className="container center">
      <p> Loading project... </p>
      </div>
    )
  }

}

const mapStateToProps = (state, oProps) => {
//  console.log(state);
  const id = oProps.match.params.id;
  const hives = state.firestore.data.hives;
  const hive = hives ? hives[id] : null
  return {
    hive: hive,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'hives'}
  ])

)(ProjDetails)
