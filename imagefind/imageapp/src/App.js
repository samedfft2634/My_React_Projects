import './App.css'
import SearchHeader from './SearchHeader'
import searchImage from './api'
import { useState } from 'react'
import  ImageList  from "./ImageList";


function App() {  
  const [images, setImages] = useState([])
  
  const handleSubmit = async(term)=>{
    const result = await searchImage(term)
    setImages(result)
    console.log(result);
  }

  return ( 
  <div className='App'>
    <SearchHeader search={handleSubmit} />
    <ImageList imagesPlaceholder={images}/>
  </div> );
}

export default App;