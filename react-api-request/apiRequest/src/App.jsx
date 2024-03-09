import { useState } from 'react'
import searchImages from './api'
import './App.css'
import Search_Header from './searchheader'
import ImageList from './components/ImageList'

function App() {

 const [images , setImages] = useState([])

let handleSubmit = async (term) => {

  const result = await searchImages(term)

  setImages(result)

}

  return (
<>
  <div>
    <Search_Header search={handleSubmit} />
    <ImageList imagesPlaceholder={images}/>
  </div>
</>
  )
}

export default App
