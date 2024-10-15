import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='bg-orange-800'>
      <h1 className='text-center text-green-500 underline '>THIS IS OUR HOME PAGE.</h1>
    <ul className='hover:cursor-pointer underline blue-800'>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/About">About</Link></li>
      <li><Link href="/Contact">Contact</Link></li>
      <li><Link href="/Services">Services</Link></li>
      
    </ul>
    </div>
  )
}

export default Home