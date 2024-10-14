// import "bootstrap/dist/css/bootstrap.min.css";
// import {} from "react-bootstrap";
import "./App.css";
import React,{useState,useMemo} from "react";
import User from "./user";
function App() {
  const [count, setCount] =useState(0);
  const [item, setItem] =useState(10);
  const rerendermemo =useMemo( function rerender(){
    console.warn("hello")
    return(
      count *5
    ) 

  },[count])

    return (
      <div className="App">
        <h1>count:{count}</h1>
        <h1>item:{item}</h1>
        <h1>{rerendermemo}</h1>
        <button onClick={()=>setCount(count+1)} >count update</button>
        <button onClick={()=>setItem(item+1)} >item update</button>
       
      </div>
    )
  
}

export default App;
