// import "bootstrap/dist/css/bootstrap.min.css";
// import {} from "react-bootstrap";
import "./App.css";
import React, {useRef} from "react";
// import Moheed from "./moheed";
function App(){
  let Inputref = useRef(null)
  function HandleInput(){
    console.warn("this is warning")
    Inputref.current.value="1000"
    Inputref.current.style.color="red"
  }
  return(
    <div className="App">
      <h2>this is new property</h2>
      <input type="text" ref={Inputref} />
      <button onClick={HandleInput}>Update</button>
    </div>
  )
}
export default App;
