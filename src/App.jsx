import { useState } from 'react'
import { Header } from './components/Header'
import { Followers } from './components/Followers'
import { Overview } from './components/Overview'
import './App.css'

function App() {
  return (
    <>
    <section className='p-8 max-w-7xl mx-auto'>
      <Header  />
      <Followers />
      <Overview />
    </section>
    </>
  )
}

export default App
