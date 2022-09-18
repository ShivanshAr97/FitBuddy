import React from 'react'
import workoutImg from '../img/workoutImg.jpg'

const Workout = () => {
  return (
    <>
        <h1 className='font-bold flex justify-center text-2xl mt-4'>Music Corner</h1>
    <div className='flex mx-12 mt-6'>
    <img className='rounded-xl w-96 -mt-4' src={workoutImg} alt="" />
    <div className='m-4'>
        <p className='font-semibold m-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae fuga, vero eligendi sit at nemo nesciunt nobis voluptas architecto illo!</p>
        <iframe width="800" height="380" src="https://open.spotify.com/embed/playlist/37i9dQZF1DWUSyphfcc6aL?utm_source=generator" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    </div>
    </>
  )
}

export default Workout