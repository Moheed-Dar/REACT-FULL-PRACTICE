import "bootstrap/dist/css/bootstrap.min.css";
import { Alert } from "react-bootstrap";
import "./App.css";
import React from "react";
import User from "./user";
//this is fragment componentand elements
function App() {
  function ptc(item) {
    console.log(item);
  }
  return (
    <div className="App">
      <h1>reuse component of react</h1>
      <User data={ptc} />
    </div>
  );
}
export default App;
