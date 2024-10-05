import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import { useState } from 'react';
import About from './components/About';
import React from "react";

function App() {
  const[mode, setMode] = useState('light')
  const toggleMode = () =>{
    if(mode === 'light' ){
      setMode('dark')
      document.body.style.background = 'grey'
      
    } else {
      setMode('light')
      document.body.style.background = 'white'
      
    }
  }

  return (
    
      <div className={`text-${mode === 'dark' ? 'white' : 'dark'} h-100`}>
        <Navbar title='text Utils' hometitle='Home' navBarAbout='About' toggleModeFucntion = {toggleMode} mode = {mode} />
        <Form/>
      </div>
     
  );
}

export default App;
