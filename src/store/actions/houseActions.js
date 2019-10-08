export const createHouse = (house) => {

  return(dispatch, getState, {getFirebase, getFirestore}) => {
    //reference to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authId = getState().firebase.auth;

    firestore.collection('houses').add({
      ...house,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorID: authId,
      createdAt: new Date()
    }).then(()=>{
      dispatch({ type: 'CREATE_HOUSE', house});
    }).catch((err)=>{
      dispatch({ type: 'CREATE_PROJECT_ERROR', err});
    })

  }



}
