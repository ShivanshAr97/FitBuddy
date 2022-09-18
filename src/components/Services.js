import React from 'react'
import { IoFastFoodOutline } from 'react-icons/io5';
import { CgGlassAlt } from 'react-icons/cg';
import { CgGym } from 'react-icons/cg';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { BsShopWindow } from 'react-icons/bs';
import { FaUserFriends } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='flex m-12'>
            <div className='w-1/3'>
                <div className='flex'>
                    <div className='flex m-2  flex-col border w-fit px-5 py-2 cursor-pointer'>
                        <IoFastFoodOutline size="44" />
                        <p className='flex justify-center font-bold'>Diet</p>
                    </div>
                    <div className='flex m-2  flex-col border w-fit px-4 py-2 cursor-pointer'>
                        <CgGlassAlt size="44" />
                        <p className='flex justify-center font-bold'>Water</p>
                    </div>
                    <div className='flex m-2  flex-col border w-fit px-5 py-2 cursor-pointer'>
                        <HiOutlineMusicNote size="44" />
                        <p className='flex justify-center font-bold'>Music</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='flex  m-2 flex-col border w-fit px-4 py-2 cursor-pointer'>
                        <CgGym size="44" />
                        <p className='flex justify-center font-bold'>Trainer</p>
                    </div>
                    <div className='flex  m-2 flex-col border w-fit px-4 py-2 cursor-pointer'>
                        <BsShopWindow size="44" />
                        <p className='flex justify-center font-bold'>Shop</p>
                    </div>
                    <div className='flex  m-2 flex-col border w-fit px-4 py-2 cursor-pointer'>
                        <FaUserFriends size="44" />
                        <p className='flex justify-center font-bold'>Friends</p>
                    </div>
                </div>
            </div>
            <div className='w-2/3'>
                <h1 className='m-4 text-2xl font-bold'>Tip for Fit Life</h1>
                <div className='flex'>
                <ul className='mx-4 text-lg'>
                    <li>1. Eat a healthy diet</li>
                    <li>2. Consume less salt and sugar</li>
                    <li>3. Don't smoke</li>
                </ul>
                <ul className='mx-8 text-lg'>
                    <li>4. Reduce intake of harmful fats</li>
                    <li>5. Avoid harmful use of alcohol</li>
                    <li>6. Be active</li>
                </ul>
                </div>



            </div>
        </div>
    )
}

export default Services