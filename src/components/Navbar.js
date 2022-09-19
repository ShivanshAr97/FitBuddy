import React from 'react'
import { Link } from 'react-router-dom'
import workoutImg from '../img/workoutImg.jpg'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center fixed top-0 right-0 z-50 w-full bg-white justify-between p-2 border shadow-lg'>
        <Link to="/"><h1 className='font-bold text-2xl cursor-pointer text-red-500'>FitBuddy</h1></Link>
        <div className='flex items-center'>
            <ul className='flex'>
                <Link to="/"><li className='mx-8 cursor-pointer font-semibold'>Home</li>
                </Link>
                <Link to="/bmi">
                <li className='mx-8 cursor-pointer font-semibold'>BMI</li>
                </Link>
                <Link to="/trainer">
                <li className='mx-8 cursor-pointer font-semibold'>Trainers</li>
                </Link>
                <Link to="/workout">
                <li className='mx-8 cursor-pointer font-semibold'>Music</li>
                </Link>
                <Link to="/glass">
                <li className='mx-8 cursor-pointer font-semibold'>Water</li>
                </Link>
                <Link to="/shop">
                <li className='mx-8 cursor-pointer font-semibold'>Shop</li>
                </Link>
            </ul>
        <img className='w-12 h-12 rounded-full object-cover mx-4' src={workoutImg} alt="" />
        </div>
    </nav>
    </>
  )
}

export default Navbar