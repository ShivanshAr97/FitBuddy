import React, { useState } from 'react'
import { CgGlassAlt } from 'react-icons/cg';

const Glass = () => {

    const [intake, setIntake] = useState("Start tracking your daily water intake")
    const [value, setValue] = useState(0)

    function plus() {
        setValue(value+1)
        if (value === 0) {
            setIntake("Great work!")
        }
        if (value === 3) {
            setIntake("Half way there!")
        }
        if (value === 4) {
            setIntake("Keep up the good work !!")
        }
        if (value === 7) {
            setIntake("Congratulations on completing 8 glasses of water !!")
        }
    }

    function minus() {
        if (value<1) {
            setValue(0)
        }
        else{
            setValue(value-1)
        }
    }

  return (
    <div className='pt-32 bg-cyan-50'>
        <h1 className='flex justify-center text-3xl font-bold -mt-8 pb-8'>Water Tracker</h1>
    <div className='flex justify-center items-baseline'>
        <p onClick={plus} className='outline-none text-4xl font-bold bg-slate-700 text-white rounded-full flex justify-center items-center h-8 w-8 cursor-pointer'>+</p>
        <p className='bg-blue-400 flex justify-center items-center h-40 w-40 text-white rounded-full p-4'><CgGlassAlt size="100" /></p>
        <p onClick={minus} className='outline-none text-4xl font-bold bg-slate-700 text-white rounded-full flex justify-center items-center h-8 w-8 cursor-pointer'>-</p>
    </div>
        <p className='flex justify-center my-2 text-2xl font-bold'>{value}</p>
        <p className='flex justify-center text-xl'>{intake}</p>
        <div className='bg-blue-400 text-white px-8 py-4 w-fit flex m-8 rounded-lg flex-col mx-auto'>
            <h1 className='flex justify-center my-2 font-bold text-xl'>Today's Tip</h1>
            <p className='flex justify-center text-justify my-1'>Make drinking water a daily habit. When it's hot out or you're ill, take in even more water - 2 / 3 glasses more than usual.</p>
        </div>
    </div>
  )
}

export default Glass