import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createHive} from '../../store/actions/hiveActions'
import {Redirect} from 'react-router-dom'

class CreateHive extends Component{

  state = {
    hiveName: "",
    inspection: "",
    honeyStore: "",
    queenProd: "",
    equipmentHive:"",
    equipmentInvent:"",
    losses:"",
    gains:""
  }

  handleChange = (e) =>{
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    //console.log(this.state);
    this.props.createHive(this.state);
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
          <h5 className = ""> Create Hive </h5>
          <div className = "input-field">
            <label htmlFor = 'hiveName'> HiveName </label>
            <input type = "text" id = "hiveName" onChange = {this.handleChange}/>
          </div>
          <div className = "input-field">
            <label htmlFor = 'inspection'> Hive Inspection </label>
            <textarea onChange = {this.handleChange} id = "inspection" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <label htmlFor = 'honeyStore'> Honey Store </label>
            <textarea onChange = {this.handleChange} id = "honeyStore" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <label htmlFor = 'queenProd'> Queen's Production </label>
            <textarea onChange = {this.handleChange} id = "queenProd" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <label htmlFor = 'equipmentHive'> Equipment on the hives </label>
            <textarea onChange = {this.handleChange} id = "equipmentHive" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <label htmlFor = 'equipmentInvent'> Equipment in the inventories </label>
            <textarea onChange = {this.handleChange} id = "equipmentInvent" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <label htmlFor = 'losses'> Losses </label>
            <textarea onChange = {this.handleChange} id = "losses" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <label htmlFor = 'gains'>Gains</label>
            <textarea onChange = {this.handleChange} id = "gains" className= "materialize-textarea"></textarea>
          </div>
          <div className = "input-field">
            <button className = "btn z-depth-0"> Create Hive</button>
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
    createHive: (hive) => dispatch(createHive(hive))
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(CreateHive);
