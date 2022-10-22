import React from 'react'
import Trainers from './Trainers'
import img0 from '../img/person1Img.jpeg'
// import img1 from '../img/person2Img.jpeg'
import img2 from '../img/person3Img.jpeg'
import img3 from '../img/person4Img.png'
import img4 from '../img/person5Img.png'
import img5 from '../img/person6Img.png'
import img6 from '../img/person7Img.jpg'
import Navbar from './Navbar'


const Trainer = () => {
  return (
    <div className='bg-cyan-50 mt-16'>
      <Navbar/>
    <h1 className='flex justify-center text-3xl font-bold pt-8'>Trainer List</h1>
    <div className='flex mx-24 justify-between'>
    <Trainers img={img0} name="Asad Hussain" star="4.7" price="1,700" desc='Asad Hussain is touted as one of the youngest fitness trainers in the country. He has been coaching since the past 10 years and over 500 people have benefitted from his short yet strenuous workout routines.' /> 

    <Trainers img={img2} name="Bhupendar Dalal" star="4.9" price="3,100" desc=' This personal fitness trainer in Delhi designs a mix of outdoor and indoor workouts for his clients and creates diet plans to ensure that you get the most out of your workout sessions.' /> 

    <Trainers img={img3} name="Riya Vyas" star="4.5" price="1,250" desc='Riya Vyas is a certified yoga trainer who can help you improve your flexibility and also ensure weight loss through power yoga. Her sessions are deeply relaxing as she also incorporates some meditation into them too.' /> 
    </div>
    <div className='flex mx-24 justify-between'>
    <Trainers img={img6} name="Hasmeet Bindra" star="4.3" price="2,020" desc='Hasmeet Bindra has a loyal base of clients not just in India, but in Canada and the US too. He is a certified TRX coach and designs some really challenging workouts to push his clients to achieve desired goals.' /> 

    <Trainers img={img5} name="Ankita Gautam" star="4.8" price="1,999" desc='Those not really into gym sessions and hardcore cardio or weight training, yoga might be a great option to consider for getting fit. Ankita Gautam is a certified yoga trainer who can help you improve your flexibility. ' /> 

    <Trainers img={img4} name="Vijay Singh" star="4.4" price="2,900" desc='Vijay Singh helps his clients with weight training, sports conditioning and suspension training. With him, you can do a an effective integrated workout 3 to 4 times a week and see amazing results.' /> 
    </div>
    </div>
  )
}

export default Trainer