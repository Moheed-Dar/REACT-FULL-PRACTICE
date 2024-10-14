import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
import "./App.css";
import React from "react";
import User from './user';
//this is fragment componentand elements
function App(){
  return(
      <div className="App">
          <h1>reuse component of react</h1>
          <table>
            <tbody>
              <tr>
                <User/>
              </tr>
            </tbody>
          </table>

      </div>
  );
}
export default App;
