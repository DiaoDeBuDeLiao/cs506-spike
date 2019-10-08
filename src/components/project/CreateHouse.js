import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createHouse} from '../../store/actions/houseActions'
import {Redirect} from 'react-router-dom'

class CreateHouse extends Component{

  state = {
    title: "",
    details: ""
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    //console.log(this.state);
    this.props.createHouse(this.state);
    this.props.history.push('/');
  }

  render(){
    const {auth} = this.props;
    if (!auth.uid){
      return <Redirect to='/signin'/>
    }
    return(

      <div className = "container">
        <form onSubmit={this.handleSubmit} className = "#e3f2fd blue lighten-5">
          <h5 className = ""> Add House </h5>
          <div className = "input-field">
            <label htmlFor = 'title'> House Title </label>
            <input type = "text" id = "title" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = 'details'> House Details </label>
            <textarea onChange = {this.handleChange} id = "details" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <label htmlFor = 'price'> House Rent per month </label>
            <textarea onChange = {this.handleChange} id = "price" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <input type="file" accept = "/image" onChange = {this.handleChange} id = "image" className= "materialize-textarea"></input>
          </div>
          <div className = "input-field">
            <button className = "btn z-depth-0"> Create </button>
          </div>

        </form>

      </div>

    )
  }


}


const mapStateToProps = (state) => {

  return{
    auth: state.firebase.auth
  }

}

const mapDispatchToProps = (dispatch) =>{
  return{
    createHouse: (house) => dispatch(createHouse(house))
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(CreateHouse);
