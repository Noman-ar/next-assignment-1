import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero/Hero'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-orange-800'>
     <Header/>
     <Hero/>
     <Footer/>
    </div>
  )
}

export default Home