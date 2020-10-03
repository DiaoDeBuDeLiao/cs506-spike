import React from 'react';
import HouseSummary from './houseSummary';
import {Link} from "react-router-dom";

const ProjList = ({projects}) => {

  return(

    <div className = "project-section">

      {projects && projects.map(project => {
        return(
          <Link to={'/project/' + project.id}>
          <HouseSummary project={project} key= {project.id}/>
          </Link>
        )
      })}


      </div>

  )

}

export default ProjList;
