import React from 'react'
import Shops from './Shops'

import prod1 from '../img/prod1.png'
import prod2 from '../img/prod2.png'
import prod3 from '../img/prod3.png'
import prod4 from '../img/prod4.png'
import prod5 from '../img/prod5.webp'
import prod6 from '../img/prod6.webp'
import prod7 from '../img/prod7.webp'
import prod8 from '../img/prod8.webp'
import prod9 from '../img/prod9.webp'
import prod10 from '../img/prod10.webp'
import prod11 from '../img/prod11.webp'
import prod12 from '../img/prod12.webp'
import prod13 from '../img/prod13.webp'
import prod14 from '../img/prod14.webp'
import prod15 from '../img/prod15.webp'


const Trainer = () => {
  return (
    <div className='bg-cyan-50 mt-16'>
      <h1 className='flex justify-center text-3xl font-bold pt-8 pb-6'>FitBuddy Shop</h1>
      <div className='flex mx-24 justify-between'>
        <Shops img={prod1} name="Dumbbells" star="4.7" price="46,070" desc='Home exercise equipment kit online proffesional' />

        <Shops img={prod7} name="Crunches" star="4.9" price="21,489" desc='Lifeline Home Gym - compact multigym for home use' />

        <Shops img={prod3} name="Flexbench" star="4.7" price="30,002" desc='Adjustable flexbench for home workout by Flexi, India' />

        <Shops img={prod4} name="Treadmill" star="4.6" price="28,000" desc='Walking pad and foldable treadmill for your home' />

        <Shops img={prod5} name="Protein Shaker" star="4.3" price="220" desc='beatXP Protein Spider Shaker 500ml Blender Bottle ' />
      </div>
      <div className='flex mx-24 justify-between'>
        <Shops img={prod6} name="Strengthner" star="4.7" price="190" desc='Morex adjustable power for home gym' />

        <Shops img={prod15} name="Stair Climb" star="4.8" price="3,10,816" desc='Stairs gym equipment, for home workout' />

        <Shops img={prod8} name="Dumbbells" star="4.7" price="499" desc='3Kg commercial gym equipment' />

        <Shops img={prod2} name="Bicycle" star="4.9" price="7,540" desc='Morex adjustable power for home gym' />

        <Shops img={prod10} name="Yoga Mat" star="4.7" price="2,200" desc='TEGO 6mm Extra Thick Yoga Mat, PVC Material' />
      </div>
      <div className='flex mx-24 justify-between'>
        <Shops img={prod9} name="Strengthner" star="4.8" price="167" desc='Adjustable Hand Strengthener' />

        <Shops img={prod12} name="Tyre push" star="4.2" price="1,47,345" desc='Gym equipment, 1 Piece' />

        <Shops img={prod13} name="Pullups" star="4.4" price="2,87,349" desc='Commercial gym equipment, 1 Piece' />

        <Shops img={prod14} name="Bicycle" star="4.7" price="1,67,000" desc='Professional gym equipment, 1 Piece' />

        <Shops img={prod11} name="Yoga Mat" star="4.4" price="899" desc='Yoga mat - green palm with cover' />
      </div>
    </div>

  )
}

export default Trainer