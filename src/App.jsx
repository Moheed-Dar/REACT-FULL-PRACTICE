// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Button } from "react-bootstrap"; 
import React from 'react'
import './App.css'
import HeaderContainer from './containers/HeaderContainer'
import HomeContainer from './containers/HomeContainer'
function App() {
  return ( 
    <div className='App' >
      <HeaderContainer/>
      <HomeContainer/>

    </div>

  )
}

export default App