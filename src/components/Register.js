import React from 'react'
import { Link } from 'react-router-dom'
import img from '../img/registerImg.jpg'

const Register = () => {

    function registered() {
        alert("User registered !")
    }
  return (
    <div className='flex items-center justify-center'>
    <img className='my-44 w-96 rounded-xl' src={img} alt="" />
    <div>
    <h1 className='flex justify-center font-bold text-3xl mx-24 -mt-6 mb-8'>Register with us</h1>
    <form action="">
        <input className='flex border-2 px-4 py-2 rounded-lg my-2 mx-28 w-96 justify-center' type="text" placeholder='Username' required />
        <input  className='flex border-2 px-4 py-2 rounded-lg my-2 mx-28 w-96 justify-center' type="email" placeholder='Email' required />
        <input className='flex border-2 px-4 py-2 rounded-lg my-2 mx-28 w-96 justify-center' type="password" placeholder='Password' required />
        <Link to="/home"><button onClick={registered} className="btn flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer">Sign Up</button></Link>
        <p className='flex justify-center text-sm'>Already have an account ? <Link to="/login"><span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Log in</span></Link></p>
    </form>
    </div>
    </div>
  )
}

export default Register