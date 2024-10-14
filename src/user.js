// import "bootstrap/dist/css/bootstrap.min.css";
// import { Alert } from "react-bootstrap";
import "./App.css";
import React from "react";
class User extends React.PureComponent {
 
  render() {
    console.warn("check purecomponents re-rendering");
    return (
      <div className="App">
        <h2>hello world {this.props.count} </h2>
        
      </div>
    );
  }
}

export default User;
