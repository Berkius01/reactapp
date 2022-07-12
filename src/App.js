import './App.css';
//import User from './components/User';
import Navbar from './layout/Navbar';
import React, { Component }  from 'react';
import Users from './components/Users';
import AddUser from './forms/AddUser';
import UpdateUser from './forms/UpdateUser';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import NotFound from './pages/NotFound';
import Contribute from './pages/Contribute';
//import Home from './components/Home';
//import About from './components/About';
//import Test from './components/Test';




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



  }
  
  
  
  <h4 >app component</h4>
        
        <Navbar title="User APp 2"/>
        
        <hr/>
        <AddUser/>
        <Users deleteUser = {this.deleteUser} users = {this.state.users}></Users>
  
  
  
  */
/*<Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
          <Routes>
            <Route exact path="/info" element={<About></About>} />
          </Routes> */

  //<Test test="deneme"/> bunu deneme amaçlı
  /*<AddUser/>
        <Users /*deleteUser = {this.deleteUser} users = {this.state.users}></Users> */
        
  render()
  { 
   
    return (
      <Router>
        <div className='container'>
        
        <Navbar title="User App"/>
        
        <hr/>
        
        <Routes>
          <Route exact path="/" element={<Users/>}/>
          <Route exact path="/add" element={<AddUser/>}/>
          <Route exact path="/github" element={<Contribute/>}/>
          <Route exact path="/edit/:id" element={<UpdateUser />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        
        
        </div>
        
      </Router>
      
    );
  }
}

export default App;

