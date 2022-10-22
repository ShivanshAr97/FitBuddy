import React from 'react'
import Content from './Content'
import Navbar from './Navbar'
import Services from './Services'

const Home = () => {
  return (
    <div className='bg-cyan-50'>
    <Navbar/>
    <Content/>
    <Services/>
    </div>
  )
}

export default Home