import React, { Component } from 'react'
import User from './User';
//import ProptTypes from "prop-types";
import UserConsumer from '../context';





export default class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {
          value => {
            const {users} = value;
            return (
                  <div>
                    {
                        users.map(user =>{
                            return(
                                <User 
                                    key = {user.id}
                                    id = {user.id}
                                    name = {user.name}
                                    salary = {user.salary}
                                    department = {user.department}
                                    //deleteUser = {deleteUser}
                                />
                            )
                        })
                    }
                  </div>
              )
          }
        }
      </UserConsumer>
    )
  }
    //const {users,deleteUser} = this.props;
  //   return (
  //     <div>
  //       {
  //           users.map(user =>{
  //               return(
  //                   <User 
  //                       key = {user.id}
  //                       id = {user.id}
  //                       name = {user.name}
  //                       salaray = {user.salaray}
  //                       department = {user.department}
  //                       //deleteUser = {deleteUser}
  //                   />
  //               )
  //           })
  //       }
  //     </div>
  //   )
  // }
}

/*
Users.proptTypes={
    users : ProptTypes.array.isRequired,
    deleteUser : ProptTypes.func.isRequired
}*/
