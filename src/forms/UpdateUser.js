import React, { Component } from 'react';
import axios from 'axios';
import UserConsumer from '../context';






class UpdateUser extends Component {
    
    state={
        
        name :"",
        department:"",
        salary:""
    }
    /*
      changeName=(e)=>{
        this.setState({
          name:e.target.value
        })
      }
      changeDepartment=(e)=>{
        this.setState({
          department:e.target.value
        })
      }
      changeSalary=(e)=>{
        this.setState({
          salary:e.target.value
        })
      }*/
      changeInput=(e)=>{
        this.setState({
          [e.target.name]:e.target.value
        })
      }
      updateUser= async (dispatch,e)=>{
        e.preventDefault();
        
      }
      
      componentDidMount = async () => {
        const {id} = this.props;
        //const {id} = params();
        
        console.log(id);
        //const response = await axios.get(`http://localhost:3004/user/${id}`)
        //const {name,salary,department} = response.data;
        /*this.setState({
            name,
            salary,
            department
        });*/
      }
      
  render() {
    
    const {name,department,salary} = this.state;
    return <UserConsumer>
      {
        value=>{
          const {dispatch} = value;
          return (
            <div className="col-md-8 mb-4">
              
                  <div className='card'>
                      <div className='card-header' >
                          <h4 /*onClick = {this.onClickEvent} style ={{cursor:"pointer"}}*/>Update User Form</h4>
                      </div>
                      <div className='card-body'>
                          <form onSubmit={this.updateUser.bind(this,dispatch)}>
                              <div className='form-group'>
      
                                  <label htmlFor='name' >Name</label>
                                  <input required type="text" name="name" id="id" placeholder='enter name' className='form-control' value={name} onChange={this.changeInput}/>
                              </div>
                              <div className='form-group'>
                                  <label htmlFor='name'>Department</label>
                                  <input required type="text" name="department" id="id" placeholder='enter department' className='form-control' value={department} onChange={this.changeInput}/>
                              </div>
                              <div className='form-group'>
                                  <label htmlFor='name'>Salary</label>
                                  <input required type="text" name="salary" id="id" placeholder='enter salary' className='form-control' value={salary} onChange={this.changeInput}/>
                              </div>
                              <button className='btn btn-danger btn-block' type="submit">
                                  Update User
                              </button>
                          </form>
                      </div>
                  </div>
                
            </div>
          )
        }
      }
    </UserConsumer>
  }
}
export default UpdateUser;


