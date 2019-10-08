import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getFirebase} from 'react-redux-firebase';


function resetPass(user){

      const firebase = getFirebase();
      var auth = firebase.auth();
      var emailAddress = user.email;

      auth.sendPasswordResetEmail(emailAddress).then(function() {
        // Email sent.
      }).catch(function(error) {
        // An error happened.
      });
}


const Notifications = (props) => {

  const {auth, profile,houses} = props;
  console.log(houses);
  const userHouse = [];
  for (let i in houses){
    if (houses[i].authorID.uid === auth.uid){
    //  console.log(houses[i].authorID.uid);
    //  console.log(auth.uid);
      userHouse.push(houses[i].title);
    }
  }


  if (auth.uid){

    return(

      <div className= "card-panel #b2ebf2 cyan lighten-4 project-summary">
        <h5> Hello {props.profile.firstName} {props.profile.lastName}!</h5>
        <h6> Your Houses Listed </h6>
        <ul>
          {userHouse.map(item=> {
            return <li className = "red-text"> {userHouse[0]} </li>
          })}
        </ul>
        <button className = "btn"> Reset Password </button>



      </div>

    );
  }else{

    return(
      <h6> No Account Signed in </h6>

    )
  }
}



const mapStateToProps = (state) =>{

  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    houses: state.firestore.ordered.houses
  }

}


export default connect(mapStateToProps)(Notifications);
