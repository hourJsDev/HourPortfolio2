import React from 'react'
import Navlink from '../Components/Navlink'
import '../Styles/Navbar.css'
const Navbar = () => {
  return (
    <nav className='animationLeft navbar flex justify-between sticky items-center w-10/12 mx-auto my-10 '>
       <h1 className='text-4xl text-gray-950'>HourJS</h1>
       <Navlink/>
    </nav>
  )
}

export default Navbar
