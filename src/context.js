import React, { Component } from 'react'
import App from './App';
const userContext = React.createContext();

export class UserProvider extends Component {
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