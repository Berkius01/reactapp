import React, { Component } from 'react'
import ProptTypes from "prop-types"
import UserConsumer from '../context'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default class User extends Component {
  state={
    isVisible : true
  }
  /*
  constructor(props){
    super(props);
   
  }*/
  onDelete = async (dispatch,e)=>{
    const {id} = this.props;
    //deleteUser(id);
    await axios.delete(`http://localhost:3004/user/${id}`)
    dispatch({type:"DELETE_USER",payload:id})
  }
  onClickEvent=(e)=>{
    this.setState(
      {isVisible : !this.state.isVisible}
    )
  }
  componentWillUnmount = () => {
    console.log("compoenet gidiyr");
  }
  
  render() {
    const {id,name,department,salary} = this.props
    const{isVisible}=this.state
    return (<UserConsumer>
      {
        value =>{
          const {dispatch} = value;
          return (
            <div className='col-md-8 mb-4' >
             <div className='card' style={isVisible ?{ background:"#62848d",color:"white"}:null}>
              <div className='card-header d-flex justify-content-between'>
                <h4 className='d-inline' onClick = {this.onClickEvent} style ={{cursor:"pointer"}}>
                  {name}
                </h4>
                <i className='far fa-trash-alt' onClick = {this.onDelete.bind(this,dispatch)} style ={{cursor:"pointer"}}></i>
              </div>
              {
                isVisible ? <div className='card-body'>
      
                <p className='card-text'>department: {department}</p>
                <p className='card-text'>maaş: {salary}</p>
                <Link to={`edit/${id}`} state={{ userID: {id} }} className="btn btn-dark btn-block">Update User </Link>
              </div> : null
              }
              
             </div>
            </div>
            
          )
        }
      }
    </UserConsumer>)
    
  }

}
User.ProptTypes={
  name:ProptTypes.string.isRequired,
  salary:ProptTypes.string.isRequired,
  department:ProptTypes.string.isRequired,
  //deleteUser:ProptTypes.func.isRequired
}
User.defaultProps ={
  name:"bilgi yok",
  salary:"bilgi yok",
  department:"bilgi yok"
}
