// import React from 'react'
import Restaurant from './component/Basics/Restaurant';
import UserForm from './component/Hooks/UseState';
import UseEffect from './component/Hooks/UseEffect';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
/* const App = () => {
  return (
      <div>
        <p>Welcome <MyName />, to The world of React App</p>
      </div>
      // <p> This is not allowed in React, while we use JSX, it should be enclosed in the upper div tag. </p>
  );
};
const MyName = () => {
  return <h1>Shivam Patel</h1>;
  
};

export default App
*/
// In this app.js file we write components.
import React from 'react'
import LoginSignup from './component/Basics/LoginSignup';

const App = () => {
  return (
    <>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path='/' element={<LoginSignup />}></Route>
      <Route path='/Restaurant' element={<Restaurant />}></Route>
      {/* <Route path='/Login-SignUp' element={<LoginSignup />}></Route> */}
      <Route path='/CheckAge' element={<UserForm />}></Route>
      <Route path='/ChatNumber' element={<UseEffect />}></Route>

    </Routes>
  </BrowserRouter>
      {/* <UserForm /> */}
      {/* <LoginSignup /> */}
    </>
  );
}

export default App
