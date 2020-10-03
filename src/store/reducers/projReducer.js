const initState = {

  hives: [
  ]
};

const projReducer = (state = initState, action) => {

  switch(action.type){

    case 'CREATE_PROJECT_ERROR':
      console.log("create hive error", action.err);
      return state;
    case 'CREATE_HIVE':
      console.log("created hive", action.hive);
      return state;
    default:
      return state;


  }

  return state;

}

export default projReducer;
