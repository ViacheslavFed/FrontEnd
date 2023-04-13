import React from 'react'
import CardList from './Components/CardList/CardList'
import Header from './Components/Header/Header'
import Paragraf from './Components/Paragraf/Paragraf'
import Rent from './Components/Rent/Rent'
import Sekcion from './Components/Sekcion/Sekcion'
import Servises from './Components/Servises/Servises'

function App() {
  return (
    <div>
      <Header/>
      <Sekcion/>
      <Servises/>
      <Paragraf/>
      <CardList/>
      <Rent/>
    </div>
  )
}

export default App