import { useState } from 'react'
import Home from  "./page/Home/Home.jsx"
import { Route, Routes } from 'react-router-dom'
import Login from './AddUser/Login/Login.jsx'
import Sing from './AddUser/Sing/Sing.jsx'


function App() {


  return (
    <>
       <Routes>
           <Route path='/' element ={<Home/>} />
           <Route path='/login' element ={<Login/>} />
           <Route path='/sing' element ={<Sing/>} />
           {/* <Route path='/home' element ={<Home/>} /> */}
       </Routes>
    </>
  )
}

export default App
