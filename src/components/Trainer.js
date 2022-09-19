import React from 'react'
import Trainers from './Trainers'
import img1 from '../img/person2Img.jpeg'
import img2 from '../img/person3Img.jpeg'
import img3 from '../img/person4Img.png'
import img4 from '../img/person5Img.png'
import img5 from '../img/person6Img.png'


const Trainer = () => {
  return (
    <div className='bg-cyan-50 mt-16'>
    <h1 className='flex justify-center text-3xl font-bold pt-8'>Trainer List</h1>
    <div className='flex mx-24 justify-between'>
    <Trainers img={img4} name="Name" star="4.7" price="2200" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem consequ untur animi ex' /> 

    <Trainers img={img2} name="Name" star="4.7" price="2200" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem consequ untur animi ex' /> 

    <Trainers img={img3} name="Name" star="4.7" price="2200" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem consequ untur animi ex' /> 
    </div>
    <div className='flex mx-24 justify-between'>
    <Trainers img={img1} name="Name" star="4.7" price="2200" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem consequ untur animi ex' /> 

    <Trainers img={img5} name="Name" star="4.7" price="2200" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem consequ untur animi ex' /> 

    <Trainers img={img4} name="Name" star="4.7" price="2200" desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptatem consequ untur animi ex' /> 
    </div>
    </div>
  )
}

export default Trainer