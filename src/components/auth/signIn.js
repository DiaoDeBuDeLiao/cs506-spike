import React, {Component} from 'react';
import {signIn} from '../../store/actions/authActions';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class SignIn extends Component{

  state = {
    email: "",
    password: ""
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render(){
    const {authErr, auth} = this.props;

    if (auth.uid){
      return <Redirect to='/'/>
    }

    return(

      <div className = "container">
        <form onSubmit={this.handleSubmit} className = "white">
          <h5 className = ""> Sign In </h5>
          <div className = "input-field">
            <label htmlFor = 'email'> Email </label>
            <input type = "email" id = "email" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = 'email'> Password </label>
            <input type = "password" id = "password" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <button className = "btn z-depth-0"> Login </button>
            <div className = "red-text center">
            {authErr ? <p> {authErr} </p> : null}
            </div>
          </div>

        </form>

      </div>

    )
  }


}

const mapStateToProps = (state) => {
  return{
    authErr: state.auth.authErr,
    auth: state.firebase.auth
  }

}


const mapDispatchToProps = (dispatch) =>{
  return{
    signIn: (creds) => dispatch(signIn(creds))
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);
