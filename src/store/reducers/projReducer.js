const initState = {

  houses: [
    {id: '1', addedBy: "George", title: "12 Langdon", descripton: "adhjfsgdkhlfjbjnm" },
    {id: '2', addedBy: "Sam", title: "107 State", descripton: "Another House" },
    {id: '3', addedBy: "George", title: " 7 N Randall", descripton: "A third House" }
  ]
};

const projReducer = (state = initState, action) => {

  switch(action.type){

    case 'CREATE_HOUSE':
      console.log("created house", action.house);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log("create house error", action.err);
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
