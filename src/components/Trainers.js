import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';

const Trainers = (props) => {
  return (
    <>
    <div className='flex border border-gray-500 rounded-lg justify-between m-4'>
    <div className='m-4'>
    <img className='flex mx-auto rounded-lg object-cover w-64 h-64' src={props.img} alt="" />
    <h1 className=' font-bold text-2xl p-1'>{props.name}</h1>
    <div className='flex justify-between px-1 pb-1 border-b-2 border-gray-500'>
        <p className='flex items-center text-sm font-semibold'><BiRupee/> {props.price}/- pm</p>
        <p className='text-sm flex items-center'><AiFillStar/>{props.star}</p>
    </div>
    <p className='text-sm p-1'>{props.desc}</p>
    {/* <button className='w-full flex justify-end text-xs cursor-pointer hover:underline px-2 py-1'>Know More</button> */}
    </div>
    </div>
    </>
  )
}

export default Trainers