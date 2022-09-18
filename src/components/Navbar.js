import React from 'react'
import workoutImg from '../img/workoutImg.jpg'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center fixed top-0 right-0 z-50 w-full bg-white justify-between p-2 border shadow-lg'>
        <h1 className='font-bold text-2xl cursor-pointer'>FitBuddy</h1>
        <div className='flex items-center'>
            <ul className='flex'>
                <li className='mx-8 cursor-pointer font-semibold'>Home</li>
                <li className='mx-8 cursor-pointer font-semibold'>Diet</li>
                <li className='mx-8 cursor-pointer font-semibold'>Music</li>
                <li className='mx-8 cursor-pointer font-semibold'>Water</li>
                <li className='mx-8 cursor-pointer font-semibold'>Trainers</li>
                <li className='mx-8 cursor-pointer font-semibold'>Shop</li>
            </ul>
        <img className='w-12 h-12 rounded-full object-cover mx-4' src={workoutImg} alt="" />
        </div>
    </nav>
    </>
  )
}

export default Navbar