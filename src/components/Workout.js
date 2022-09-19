import React from 'react'
import workoutImg from '../img/workoutImg.jpg'

const Workout = () => {
  return (
    <div className='bg-cyan-50'>
      <h1 className='font-bold flex justify-center text-3xl pt-24'>Music Corner</h1>
      <div className='flex'>
        <div className='ml-16 mr-12 mt-8'>
          <img className='w-72 h-[23.7rem]' src={workoutImg} alt="" />
        </div>
        <div className='mr-16 my-8'>
          <iframe width="820" height="380" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWUSyphfcc6aL?utm_source=generator" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Workout