import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);
  const onLoaderFinished=(x)=>{
    setProgress(x);
  }
  const apikey = process.env.REACT_APP_API_KEY;
  return (
    <BrowserRouter>
    <div>
    <LoadingBar
        color='#f11946'
        progress={progress}
        
      />
      <Navbar/>
      <Routes>
      
      <Route path='/' element={<News api={apikey} setpd={onLoaderFinished} pagesize={9} key = "general" country ="in" category = "general"/>}/> 
      <Route path='/business' element={<News api={apikey} setpd={onLoaderFinished} pagesize={9} key = "business" country ="in" category = "business"/>}/> 
      <Route path='/entertainment' element={<News api={apikey} setpd={onLoaderFinished} pagesize={9} key = "entertainment" country ="in" category = "entertainment"/>}/> 
      <Route path='/health' element={<News api={apikey} setpd={onLoaderFinished} pagesize={9} key = "health" country ="in" category = "health"/>}/> 
      <Route path='/science' element={<News api={apikey} setpd={onLoaderFinished} pagesize={9} key = "science" country ="in" category = "science"/>}/> 
      <Route path='/sports' element={<News api={apikey} setpd={onLoaderFinished} pagesize={9} key = "sports" country ="in" category = "sports"/>}/> 
      <Route path='/technology' element={<News api={apikey} setpd={onLoaderFinished} pagesize={9} key = "technology" country ="in" category = "technology"/>}/> 
		  	
      </Routes>
      
    </div>
    </BrowserRouter>
  
  )
}

export default App



