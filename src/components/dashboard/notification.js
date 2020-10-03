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

  const {auth, profile,hives} = props;
  console.log(hives);
  const userHive = [];
  for (let i in hives){
    if (hives[i].authorID.uid === auth.uid){
    //  console.log(hives[i].authorID.uid);
    //  console.log(auth.uid);
      userHive.push(hives[i].title);
    }
  }


  if (auth.uid){

    return(

      <div className= "card-panel #b2ebf2 cyan lighten-4 project-summary">
        <h5> Hello {props.profile.firstName} {props.profile.lastName}!</h5>
        <h6> Your Hives Listed </h6>
        <ul>
          {userHive.map(item=> {
            return <li className = "red-text"> {userHive[0]} </li>
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
    hives: state.firestore.ordered.hives
  }

}


export default connect(mapStateToProps)(Notifications);
