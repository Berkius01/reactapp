import React, { Component } from 'react'
import App from './App';
import axios from 'axios'

const userContext = React.createContext();

const reducer = (state,action)=>{
  switch(action.type){
    case "DELETE_USER":
      return{
        ...state,
        users:state.users.filter(user=>action.payload !== user.id)
      }
    case "ADD_USER":
      return{
        ...state,
        users:[...state.users,action.payload]
      }
    case "UDATE_USER":
      return{
        ...state,
        users:[...state.users,action.payload]
      }
    default:
      return state
  }
}

export class UserProvider extends Component {
    state = {
        users:[],
        dispatch : action => {
          this.setState(state => reducer(state,action))
        }
      }
    componentDidMount = async () => {
      const response = await axios.get("http://localhost:3004/user")
      console.log(response)
      this.setState({
        users:response.data
      })
    }
    
  render() {
    return (
      <userContext.Provider value={this.state}>
        <App />
      </userContext.Provider>
    )
  }
}

const UserConsumer = userContext.Consumer;
export default UserConsumer;
/*
eski state
state={
  a: 10,
  b:20
}
{
  ...state => yapınca yeni bir state yapıyor güncelleyip yeni state oluşturuyor ve değiştiriyor
}

*/