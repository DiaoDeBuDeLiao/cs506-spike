const initState = {
  authErr: null
};

const authReducer = (state = initState, action) => {

  switch(action.type){
    case 'LOGIN_ERR':
      console.log("login fail");
      return{
        ...state,
        authErr: 'Login Failed'
      }
    case 'LOGIN_SUCCESS':
      console.log("login succ");
      return{
        ...state,
        authErr: null
      }
    case 'SIGNOUT_SUCCESS':
      console.log("Signout Success");
      return state;

    case 'SIGNUP_SUCCESS':
      console.log("signup worked");
      return{
        ...state,
        authErr: null
      }

      case 'SIGNUP_ERR':
        console.log("signup fail");
        return{
          ...state,
          authErr: action.err.message
        }
    default:
      return state;

  }

}

export default authReducer;
