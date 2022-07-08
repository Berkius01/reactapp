import React, { Component } from 'react'
import ProptTypes from "prop-types"

export default class User extends Component {
  state={
    isVisible : true
  }
  constructor(props){
    super(props);
   
  }
  onDelete = (e)=>{
    const {id,deleteUser} = this.props;
    //deleteUser(id);
  }
  render() {

    const {name,department,salary} = this.props
    const{isVisible}=this.state
    return (
      <div className='col-md-8 mb-4'>
       <div className='card'>
        <div className='card-header d-flex justify-content-between'>
          <h4 className='d-inline'>
            {name}
          </h4>
          <i className='far fa-trash-alt' onClick = {this.onDelete} style ={{cursor:"pointer"}}></i>
        </div>
        {
          isVisible ? <div className='card-body'>

          <p className='card-text'>maaş: {salary}</p>
          <p className='card-text'>department: {department}</p>
          
        </div> : null
        }
        
       </div>
      </div>
      
    )
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
