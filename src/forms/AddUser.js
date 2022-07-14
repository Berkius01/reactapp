import React, { Component } from 'react'
import posed from 'react-pose';

//import uniqid from 'uniqid';
import axios from 'axios';
import UserConsumer from '../context';
const Animation = posed.div({
  visible : {
    opacity : 1,
    applyAtStart:{
      display : "block"
    }
  },
  hidden : {
    opacity : 0,
    applyAtEnd:{
      display:"none"
    }
  }
});


class AddUser extends Component {
    state={
        isVisible:true,
        name :"",
        department:"",
        salary:""
    }
    onClickEvent=(e)=>{
        this.setState(
          {isVisible : !this.state.isVisible}
        )
      }/*
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
      addUser= async (dispatch,e)=>{
        e.preventDefault();
        const {name,salary,department} = this.state;

        const newUser={
          //id:uniqueId(),
          name:name,
          salary:salary,
          department:department
        }
        console.log(newUser);
        const response = await axios.post("http://localhost:3004/user",newUser)
        dispatch({type:"ADD_USER",payload:response.data});
        
        alert("kullanıcı eklendi");
        window.location.reload();
      }
      
  render() {
    const {isVisible,name,department,salary} = this.state;
    return <UserConsumer>
      {
        value=>{
          const {dispatch} = value;
          return (
            <div className="col-md-8 mb-4">
              <button onClick = {this.onClickEvent} className='btn btn-dark btn-block mb-2'> {isVisible ? "Hide Form":"Show Form"}</button>
                <Animation pose = {isVisible ? "visible" : "hidden"}>
                  <div className='card'>
                      <div className='card-header' >
                          <h4 /*onClick = {this.onClickEvent} style ={{cursor:"pointer"}}*/>Add User Form</h4>
                      </div>
                      <div className='card-body'>
                          <form onSubmit={this.addUser.bind(this,dispatch)}>
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
                                  Add User
                              </button>
                          </form>
                      </div>
                  </div>
                </Animation>
            </div>
          )
        }
      }
    </UserConsumer>
  }
}
export default AddUser;