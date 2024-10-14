import "bootstrap/dist/css/bootstrap.min.css";
import { } from "react-bootstrap";
//this is the bootstrap cdn files only
import "./App.css";
import React from "react";
import User from './user';
function App(){
  const users =[
    {name: 'moheed', Email: 'mohee@gmail.com', contact:"23"},
    {name: 'danish', Email: 'danin@gmail.com', contact:"33"},
    {name: 'zahid', Email: 'jdah@gmail.com', contact:"53"},
    {name: 'khan', Email: 'dfs@gmail.com', contact:"6 3"},
  ]
  return(
      <div Classname="App">
          <h1>reuse component of react</h1>
          {users.map((item,i)=>
            <User data={item}  />
          )
          }

      </div>
  );
}
export default App;
