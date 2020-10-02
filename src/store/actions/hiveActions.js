export const createHive = (hive) => {

    return(dispatch, getState, {getFirebase, getFirestore}) => {
      //reference to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authId = getState().firebase.auth;
  
      firestore.collection('hives').add({
        ...hive,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authId,
        createdAt: new Date()
      }).then(()=>{
        dispatch({ type: 'CREATE_HIVE', hive});
      }).catch((err)=>{
        dispatch({ type: 'CREATE_PROJECT_ERROR', err});
      })
  
    }
  
  
  
  }
  