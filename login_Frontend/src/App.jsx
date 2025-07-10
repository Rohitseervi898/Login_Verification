import React from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
import {createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, Routes} from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import SignUp from './Pages/SignUp'
import Verification from './Pages/Verification'
// import Demo from './Pages/demo'
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/verify' element={<Verification/>}/>
      </Route>
      
    )
  )
  return <RouterProvider router={router} />;
}

export default App