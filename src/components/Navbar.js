import React from "react";
import ProptTypes from "prop-types";
function Navbar(props){
    return (
        <div >
          
          <h3 >{props.title}</h3>
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