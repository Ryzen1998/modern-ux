import React from 'react'
import NavBar from './components/navbar/NavBar'
import Header from './container/header/Header'  
import Brand from './components/brand/Brand'
import WhatGPT3 from './container/whatGPT3/WhatGpt3'
import Features from './container/features/Features'
import Possibility from './container/possibility/Possibility'
import Cta from './components/cta/Cta'
import Blog from './container/blog/Blog'
import Footer from './container/footer/Footer'
import './App.css'



const App = () => {
  return (
    <div className='App'>
     <div className="gradient__bg">
      <NavBar/>
      <Header/>
     </div>
     <Brand/>
     <WhatGPT3/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>



    </div>
  )
}

export default App