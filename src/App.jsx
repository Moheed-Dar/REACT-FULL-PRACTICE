import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button,Container } from "react-bootstrap"; 
import {useDispatch, useSelector} from 'react-redux'
import { decrement,increment } from './Features/counter/counterSlice';
import './App.css';
import React, { useEffect } from 'react';

function App() {
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    function handleIncreamentClick(){
            dispatch(increment());
    }
    function handleDecrementClick(){
        dispatch(decrement());
    }
    useEffect(() => {
        console.log("Current count:", count);
    }, [count]);
    
  return ( 
    <div className='App Container' >
        <button className='hover:backdrop-blur-xl hover:bg-green-900' onClick={handleIncreamentClick} >+</button>
        <p>Count&nbsp;:&nbsp;{count}</p>
        <button className='hover:backdrop-blur-xl hover:bg-yellow-900' onClick={handleDecrementClick} > - </button>
    </div>
  )
}
export default App