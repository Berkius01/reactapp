import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
function Navbar(props){
    return (
      <div>
        <br/>
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
          <a href="/" className="navbar-brand">
            {props.title}
          </a>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item activate"> 
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item activate"> 
              <Link to="/add" className="nav-link">Add User</Link>
            </li>
            
            <li className="nav-item activate"> 
              <Link to="/github" className="nav-link">Contribute</Link>
            </li>
          </ul>
        </nav>
      </div>
      );
}
Navbar.ProptTypes={
  title:ProptTypes.string.isRequired
}
Navbar.defaultProps={
  title:"default"
}
export default Navbar;