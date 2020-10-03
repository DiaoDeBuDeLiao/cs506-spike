import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {moment} from 'moment';

const HouseSummary = ({project}) => {

  return(

    <div className = "card-panel #bbdefb blue lighten-4 project-summary">
      <div className = "card-content grey-text text-darken-3">
        <h4 className = "card-title">{project.title} </h4>
        <p> {project.descripton} </p>
        <p> Hive Name: {project.authorFirstName} {project.authorLastName}</p>
        <p className= "red-text"> Rent {project.price} </p>
      </div>
    </div>

  );

}

export default HouseSummary;
