import './App.css';
//import User from './components/User';
import Navbar from './components/Navbar';
import React, { Component }  from 'react';
import Users from './components/Users';
class App extends Component {
  /*
  state = {
    users:[
    {
      id:1,
      name:"berk sağlıcak",
      salary : "15000",
      department:"evet"
    },{
      id:2,
      name:"arda eylen",
      salary : "3500",
      department:"köle"
    },{
      id:3,
      name:"mert kayabaşı",
      salary : "magnolia",
      department:"sigara içici"
    }]
  }

  deleteUser = (id) => {
    this.setState({
      users : this.state.users.filter(user => id !== user.id)
    })
  }*/

  render()
  { 
    return (
      <div className='container'>
        <h4 >app component</h4>
        <Navbar title="User APp 2"/>
        <hr/>
        <Users /*deleteUser = {this.deleteUser} users = {this.state.users}*/></Users>
      </div>
    );
  }
}

export default App;

