import React from 'react'
import Link from 'next/link'

const Services = () => {
  return (
    <div className=' bg-orange-800'><h1 className='text-center underline'>THIS IS SERVICES PAGE.</h1>
    <div><Link href="/Services/fruits">fruits </Link></div>
    <div><Link href="Services/vegetable">vegetables</Link></div>
    
    </div>
  )
}

export default Services