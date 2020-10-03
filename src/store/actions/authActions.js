import { getFirebase } from "react-redux-firebase";
import FireBase from "firebase";
export const signIn = (credentials) =>{
  
  return(dispatch, getState, {getFirebase}) =>{
    
    
      const firebase = getFirebase();
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() =>{
        dispatch({type: 'LOGIN_SUCCESS'})
      }
    ).catch((err)=>{
      dispatch({type: 'LOGIN_ERR', err})
    });
  
 }
}

export const signOut = () => {
  return(dispatch, getState, {getFirebase}) =>{

    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: "SIGNOUT_SUCCESS"});
    });

  }

}

export const signUp = (newUser) => {
  
    FireBase.storage().ref().child("Images/" + newUser.firstName + newUser.lastName).put(newUser.profilePic).then(()=>{

      console.log("success");
    })
    const image = FireBase.storage().ref().child('Images/' + newUser.firstName + newUser.lastName);
    let URL =""
    image.getDownloadURL().then((url) => { URL = url});
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase()
        const firestore = getFirestore()
        firebase.auth().createUserWithEmailAndPassword(
        newUser.email,
        newUser.password
        ).then((response) => {
        return firestore.collection('users').doc(response.user.uid).set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0],
            profileURL: URL
        })
        }).then(() => {
        dispatch({ type: 'SIGNUP_SUCCESS' })
        }).catch(error => {
        dispatch({ type: 'SIGNUP_ERROR', error })
        })
    }
}
