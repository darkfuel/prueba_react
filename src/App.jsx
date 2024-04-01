import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import MiApi from './assets/componentes/MiApi'
import NavSearch from './assets/componentes/Buscador'

function App () {
  const [inputSearch, setInputSearch] = useState('')
  return (
    <>
      <NavSearch inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <MiApi inputSearch={inputSearch} />
    </>
  )
}
export default App
