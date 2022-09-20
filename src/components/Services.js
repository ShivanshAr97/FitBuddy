import React from 'react'
import { Link } from 'react-router-dom';
import { IoFastFoodOutline } from 'react-icons/io5';
import { CgGlassAlt } from 'react-icons/cg';
import { CgGym } from 'react-icons/cg';
import { HiOutlineMusicNote } from 'react-icons/hi';
import { BsShopWindow } from 'react-icons/bs';
import { GiWeightScale } from 'react-icons/gi';

const Services = () => {
    return (
        <div className='flex p-12'>
            <div className='w-1/3'>
                <div className='flex'>
                    <Link to="/">
                    <div className='flex m-2  flex-col border w-fit px-5 py-2 cursor-pointer'>
                        <IoFastFoodOutline size="44" />
                        <p className='flex justify-center font-bold'>Diet</p>
                    </div>
                    </Link>
                    <Link to="/glass">
                    <div className='flex m-2  flex-col border w-fit px-4 py-2 cursor-pointer'>
                        <CgGlassAlt size="44" />
                        <p className='flex justify-center font-bold'>Water</p>
                    </div>
                    </Link>
                    <Link to="/workout">
                    <div className='flex m-2  flex-col border w-fit px-5 py-2 cursor-pointer'>
                        <HiOutlineMusicNote size="44" />
                        <p className='flex justify-center font-bold'>Music</p>
                    </div>
                    </Link>

                </div>
                <div className='flex'>
                    <Link to="/trainer">
                    <div className='flex  m-2 flex-col border w-fit px-4 py-2 cursor-pointer'>
                        <CgGym size="44" />
                        <p className='flex justify-center font-bold'>Trainer</p>
                    </div>
                    </Link>
                    <Link to="/shop">
                    <div className='flex  m-2 flex-col border w-fit px-4 py-2 cursor-pointer'>
                        <BsShopWindow size="44" />
                        <p className='flex justify-center font-bold'>Shop</p>
                    </div>
                    </Link>
                    <Link to="/">
                    <div className='flex  m-2 flex-col border w-fit px-4 py-2 cursor-pointer'>
                        <GiWeightScale size="44" />
                        <p className='flex justify-center font-bold'>BMI</p>
                    </div>
                    </Link>
                </div>
            </div>
            <div className='w-2/3'>
                <h1 className='m-4 text-2xl font-bold'>Tip for a Fit Life</h1>
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