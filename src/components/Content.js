import React from 'react'
import fitImg from '../img/FitImg.jpg'

const Content = () => {
  return (
    <>
    <div className='flex pb-20 border-b-2'>
    <div className=' w-2/3'>
    <h1 className='mx-8 mt-40 font-bold opacity-100 text-4xl'>Hi there, Shivansh</h1>
    <p className='mx-8 mt-8 mb-4'>Fitbuddy is a one stop destination to make you fit. It provides you various options like <span className='font-bold'> diet</span> and <span className='font-bold'> workout recommendation</span>, <span className='font-bold'>BMI calculation</span>, <span className='font-bold'>food and water tracking</span>, <span className='font-bold'>online trainers</span> as well as a <span className='font-bold'> shop</span> to purchase gym equipments for your home. </p>
    <button className='ml-8 text-sm font-semibold border rounded-lg bg-red-400 text-white px-3 py-1'>Begin Tracking</button>
    <button className='mx-4 opacity-100 text-sm font-semibold border rounded-lg bg-red-400 text-white px-3 py-1'>Leaderboard</button>
    </div>
    <img className='w-1/4 rounded-lg mt-40' src={fitImg} alt="" />
    </div>
    </>
  )
}

export default Content