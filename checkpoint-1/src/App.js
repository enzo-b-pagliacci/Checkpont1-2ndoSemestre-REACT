import React from 'react'
import Header from './components/cabecalho/HeaderMain'
import './App.css'
import Corpo from './components/corpo/Corpo'

export default function App() {

   return(
      <>
      <div className="container--sm">
         <Header/>
         <Corpo/>
      </div>
      </>
)}