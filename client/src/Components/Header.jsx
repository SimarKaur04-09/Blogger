import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, TextInput } from 'flowbite-react'
import { RxMagnifyingGlass } from "react-icons/rx";



const Header= () => {
  return (
    <div className='flex justify-between items-center font-bold text-black'>
      <Navbar className='border-b-2'>
        <Link to="/" className="self-center text-sm whitespace-nowrap sm:text-lg font-semibold dark:text-white"><span className="px-2 py-1 bg-gradient-to-r from-violet-500 via-indigo-500 to-pink-500 text-white">Simar's</span>Blog</Link>
      <form>
        <TextInput placeholder="Search........" rightIcon={RxMagnifyingGlass}/>
      </form>
      </Navbar>
   {/* <Link to="/home" >Home</Link>
   <Link to="/about" >About</Link>
   <Link to="/projects" >Projects</Link>
   <Link to="/signin" >SignIn</Link>
   <Link to="/signout" >SignOut</Link>
   <Link to="/dashboard" >Dashboard</Link>*/}
    </div> 
  )
}

export default Header