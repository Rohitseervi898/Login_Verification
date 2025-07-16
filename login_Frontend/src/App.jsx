import React from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Verification from './Pages/Verification'
import { AuthProvider } from './Context/AuthContext'
const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/verify' element={<Verification />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App