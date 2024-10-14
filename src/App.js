// import "bootstrap/dist/css/bootstrap.min.css";
// import {} from "react-bootstrap";
import "./App.css";
import React, { createRef } from "react";
import User from "./user";
class App extends React.Component{
  constructor(){
    super();
    this.inputRef=createRef();

  }
//  componentDidMount(){
//   console.log(this.inputRef)
//in this case it showing all value of dom 
//  }
  getVal(){
    console.warn(this.inputRef.current.value)
    this.inputRef.current.style.color="yellow"
    this.inputRef.current.style.backgroundColor="black"
  }
  render(){
    return(
      <div className="App" >
          <h1>hello there</h1>
          <input type="text"  ref={this.inputRef} />
          <button  onClick={()=>{this.getVal()}} >check ref</button>
      </div>
    )
  }
}
export default App;
