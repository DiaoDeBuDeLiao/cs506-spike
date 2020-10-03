import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp} from '../../store/actions/authActions';

class SignUp extends Component{

  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    profilePic: ""
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleFileChange = (e) => {
    e.preventDefault()
    this.setState({
      profilePic: document.getElementById('profilePic').files[0]
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render(){
    const {auth, authErr} = this.props;
    if (auth.uid){
      return <Redirect to='/'/>
    }
    return(

      <div className = "container">
        <form onSubmit={this.handleSubmit} className = "#e3f2fd blue lighten-5">
          <h5 className = ""> Create Account </h5>
          <div className = "input-field">
            <label htmlFor = 'email'> Email </label>
            <input type = "email" id = "email" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = 'email'> Password </label>
            <input type = "password" id = "password" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = 'firstName'> First Name </label>
            <input type = "text" id = "firstName" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = 'lastName'> Last Name </label>
            <input type = "text" id = "lastName" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <div>Upload Image</div>
            <input type = "file" id = "profilePic" onChange = {this.handleFileChange}/>
          </div>
          <div className = "input-field">
            <button className = "btn z-depth-0" onClick={this.handleSubmit}> Login </button>
            <div className = "red-text center">
            {authErr ? <p> {authErr} </p> : null}
            </div>
          </div>

        </form>

      </div>

    )
  }


}

const mapStateToProps = (state) =>{
  return {
    auth: state.firebase.auth,
    authErr: state.auth.authErr
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp:(newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
