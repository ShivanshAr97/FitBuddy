import React from 'react'
import { AiFillStar, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaMoneyCheck } from 'react-icons/fa';
import { BiRupee } from 'react-icons/bi';

const Trainers = (props) => {
  return (
    <>
    <div className='flex border border-gray-500 rounded-lg justify-between m-2'>
    <div className='m-4'>
    <img className='flex mx-auto rounded-lg object-cover w-32 h-32' src={props.img} alt="" />
    <h1 className='flex justify-center font-bold text-xl p-1'>{props.name}</h1>
    <div className='flex justify-between px-1 pb-1 border-b-2 border-gray-500'>
        <p className='flex items-center text-red-600 font-bold'><BiRupee/>{props.price}/- </p>
        <p className='text-xs flex items-center'><AiFillStar/>{props.star}</p>
    </div>
    <p className='text-xs p-1'>{props.desc}</p>
    <div className='flex p-2 justify-end w-full'>
    <p className='mx-4 cursor-pointer'><AiOutlineShoppingCart size="24"/></p>
    <p className=' cursor-pointer'><FaMoneyCheck size="24"/></p>
    </div>
    </div>
    </div>
    </>
  )
}

export default Trainers