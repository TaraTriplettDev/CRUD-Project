import { useState } from 'react'

import './App.css'
import axios from 'axios'


const handleSubmit = () => {
  axios({
    method: 'post',
    url: 'http://localhost:3002/create',
    data: { username: 'tara' }
  })
  .then((res) => {
    console.log('res=', res)
  })
}

const handleGetUsers = () => {
  axios({
    method: 'get',
    url: 'http://localhost:3002/GetUsers',
  })
  .then((res) => {
    console.log('res=', res)
  })
}

const handleDeleteUsers = () => {
  axios({
    method: 'delete',
    url: 'http://localhost:3002/DeleteUsers'
  })
  .then((res) => {
    console.log('res=', res)
  })
}


function App() {


  return (
    <>
    {/* { input onchange handlesubmit api axios request to /create } */}

    <button onClick={handleSubmit}>Submit</button>
    <button onClick={handleDeleteUsers}>Delete</button>
    <button onClick={handleGetUsers}>Get Users</button>
    </>
  )
}

export default App
