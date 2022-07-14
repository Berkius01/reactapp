import React, {  useEffect } from 'react';
import axios from 'axios';
import UserConsumer from '../context';
import  {useState} from "react";
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function UpdateUser() {
  const navigate = useNavigate();
  const [name,setName] = useState("");
  const [department,setDepartment] = useState("");
  const [salary,setSalary] = useState("");
  const {id} = useParams();
  useEffect(() => {
    //const {id} = useParams();
    //const {id} = params();
    
    console.log(id);
    const response = axios.get(`http://localhost:3004/user/${id}`).then(response =>{const {name,salary,department} = response.data;
    setName(name);
    //console.log(response.);
    setDepartment(department);
    setSalary(salary);
  
    })
    //const tempData = JSON.parse(response);
    //console.log(name);
    //const {name,salary,department} = response.data;
    //setName(response.name);
    //console.log(response.);
    //setDepartment(response.department);
    //setSalary(response.salary);
    /*this.setState({
        name,
        salary,
        departmentCD
    });*/
  }, []);
  function changeInputName(event){
    //const {name ,department,salary} = event.target.value
    //console.log(name)
    setName(event.target.value)
    /*setDepartment(department);
    setSalary(salary);*/
  }
  function changeInputDepartment(event){
    //const {name ,department,salary} = event.target.value
    //console.log(name)
    setDepartment(event.target.value)
    /*setDepartment(department);
    setSalary(salary);*/
  }
  function changeInputSalary(event){
    //const {name ,department,salary} = event.target.value
    //console.log(name)
    setSalary(event.target.value)
    /*setDepartment(department);
    setSalary(salary);*/
  }
  function updateUser(e,dispatch){
    e.preventDefault();
    //const {id} = useParams();
    const updatedUser={
      //id:uniqueId(),
      name:name,
      salary:salary,
      department:department
    }
    console.log(updatedUser);
    const response = axios.put(`http://localhost:3004/user/${id}`,updatedUser)
    console.log(response);
    dispatch({type:"UPDATE_USER",payload:updatedUser});
    navigate("/")
    window.location.reload();
  }
  
  
  return (
    <UserConsumer>
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
                          <form onSubmit={(e) => updateUser(e,dispatch)}>
                              <div className='form-group'>
      
                                  <label htmlFor='name' >Name</label>
                                  <input required type="text" name="name" id="id"  value={name} onChange={changeInputName} className='form-control'  />
                              </div>
                              <div className='form-group'>
                                  <label htmlFor='name'>Department</label>
                                  <input required type="text" name="department" id="id" value={department}  onChange={changeInputDepartment} className='form-control'  /*onChange={changeInput()}*//>
                              </div>
                              <div className='form-group'>
                                  <label htmlFor='name'>Salary</label>
                                  <input required type="text" name="salary" id="id"  value={salary} className='form-control' onChange={changeInputSalary} /*onChange={changeInput()}*//>
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
  )
}


export default UpdateUser;
/*

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
      }
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
        });
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
                          <h4 /*onClick = {this.onClickEvent} style ={{cursor:"pointer"}}>Update User Form</h4>
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


*/