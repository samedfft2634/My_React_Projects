import React from 'react'
import {data, category} from './helper/data'
import Navbar from './components/navbar/Navbar'
import "./App.scss"
import Card from './components/Card/Card'

function App() {
  return (
    <div className='App'>
      <Navbar  category={category}/>
      <h1><a href="">WHO ARE YOU ?</a></h1>
      <Card data={data}/>
    </div>
  )
}

export default App
