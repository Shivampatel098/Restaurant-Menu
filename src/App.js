import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Restaurant from './component/Basics/Restaurant';
import UserForm from './component/Hooks/UseState';
import UseEffect from './component/Hooks/UseEffect';
import LoginSignup from './component/Basics/LoginSignup';


// In this app.js file we write components.


const App = () => {
  return (
    
    <BrowserRouter basename='/Restaurant-Menu'>
    <Routes>
      {/* <Route path='/' element={<LoginSignup />}></Route> */}
      <Route path='/' element={<Restaurant />}></Route>

    </Routes>
  </BrowserRouter>
      
    
  );
}

export default App
