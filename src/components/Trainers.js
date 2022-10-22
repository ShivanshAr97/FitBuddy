import React from 'react'
import { AiFillStar, AiOutlineInstagram } from 'react-icons/ai';
import { BiRupee, BiCommentDetail } from 'react-icons/bi';
import { MdContactPage } from 'react-icons/md';

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
    <div className='flex p-2 justify-end w-full'>
    <p className='mx-2 cursor-pointer'><BiCommentDetail size="24"/></p>
    <p className=' cursor-pointer'><MdContactPage size="24"/></p>
    <p className='mx-2 cursor-pointer'><AiOutlineInstagram size="24"/></p>
    </div>
    {/* <button className='w-full flex justify-end text-xs cursor-pointer hover:underline px-2 py-1'>Know More</button> */}
    </div>
    </div>
    </>
  )
}

export default Trainers