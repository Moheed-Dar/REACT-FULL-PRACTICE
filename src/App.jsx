// import 'bootstrap/dist/css/bootstrap.min.css';
// // import { Button } from "react-bootstrap"; 
import React, { useEffect,useState } from 'react';
import './App.css'
import { ThemeProvider } from './contexts/theme';
import ThemeBtn from './compoenets/ThemeBtn';
import Card from './compoenets/Card';

function App() {
  const [themeMode,setThemeMode] =useState("light")
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  return (
    <ThemeProvider  value={{themeMode,darkTheme,lightTheme}} >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* {theme button} */}
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
          {/* {card} */}
          <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
