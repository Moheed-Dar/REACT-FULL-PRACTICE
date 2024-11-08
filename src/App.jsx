// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Button } from "react-bootstrap"; 
import React,{} from 'react';
import './App.css'
import UserContextProvider from './context/UserContextProvider';
import Login from './components/Login';
import Profile from './components/Profile';



function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <h1>React</h1>
      <Login />
      <Profile />
      </UserContextProvider>
    </div>
  );
}
export default App;
