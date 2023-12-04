import React, { useState } from 'react'
import { data } from './helper/data'
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import './App.css'

function App() {
  const [players, setPlayers] = useState(data);
  const handleChange =  (e) =>{
    let inputValue = e.target.value.toLowerCase().split(" ").join("");
    let filteredPlayers = data.filter((item) => {
      return item.name.toLowerCase().split(" ").join("").includes(inputValue);
    });
    setPlayers(filteredPlayers);
  }
  
  return (
    <div className='App'>
      <Header handleChange={handleChange}/>
      <CardContainer data={players}/>
    </div>
  )
}

export default App;

