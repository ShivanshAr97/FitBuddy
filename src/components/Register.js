import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../img/registerImg.jpg'

function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  async function registeredUser(event){
    event.preventDefault()

    const  response = await fetch('http://localhost:1337/api/register', {
      method:"POST",
      headers:{
        'content-type':'application/json',
      },
      body:JSON.stringify({
        name,
        email,
        pass
      })
    })

    const data = await response.json()
    console.log(data);
  }

  return (
    <div className='flex items-center justify-center'>
    <img className='my-44 w-96 rounded-xl' src={img} alt="" />
    <div>
    <h1 className='flex justify-center font-bold text-3xl mx-24 -mt-6 mb-8'>Register with us</h1>
    <form onSubmit={registeredUser}>
        <input className='flex border-2 px-4 py-2 rounded-lg my-2 mx-28 w-96 justify-center' type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} required />

        <input  className='flex border-2 px-4 py-2 rounded-lg my-2 mx-28 w-96 justify-center' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input className='flex border-2 px-4 py-2 rounded-lg my-2 mx-28 w-96 justify-center' type="password" placeholder='Password' value={pass} onChange={(e) => setPass(e.target.value)} required />

        <Link to="/home"><input type="submit" value="Sign up" className="btn flex mx-auto my-4 rounded-lg border w-fit px-4 py-1 font-semibold cursor-pointer" /></Link>
        <p className='flex justify-center text-sm'>Already have an account ? <Link to="/login"><span className='flex justify-end text-sm text-blue-600 cursor-pointer'>&nbsp; Log in</span></Link></p>
    </form>
    </div>
    </div>
  )
}

export default Register