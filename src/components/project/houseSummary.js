import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {moment} from 'moment';

const HiveSummary = ({project}) => {

  return(

    <div className = "card-panel #bbdefb yellow lighten-4 project-summary">
      <div className = "card-content grey-text text-darken-3">
        <h4 className = "card-title">{project.title} </h4>
        <p> {project.descripton} </p>
        <p> Hive Name: {project.hiveName}</p>
        <p> Honey Store: {project.honeyStore}</p>
        {/* <p className= "red-text"> Health {project.price} </p> */}
      </div>
    </div>

  );

}

export default HiveSummary;
