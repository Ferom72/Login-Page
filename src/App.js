import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Login_Page from './pages/login_page'
import SignUp_Page from './pages/signup_page';

function App(){
  return (
    <>
      <Routes>
        <Route exact path ='/' element = {<Login_Page/>}/>
        <Route path= '/signup' element = {<SignUp_Page/>}/>
      </Routes>
    </>

  );
}

export default App;
