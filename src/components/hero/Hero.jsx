import React, { useEffect } from 'react'
import mobile from "../../assets/mobile.png"
import CountUp from 'react-countup'
import Aos from 'aos'

const Hero = () => {
  useEffect(() => {
    Aos.init(
      {
        offset: 100,
        duration: 500,
        easing: "ease-in-sine",
        delay: 100, 
      }
  );
  Aos.refresh();
}, [])
  

  
  return (
   <>
    <section id='home' className='md:h-[97vh] h-[140vh] bg-gradient-to-r from-blue-900 to-blue-800'>
        
        <div className="flex flex-col gap-4 md:flex-row md:pt-40 pt-52 items-center" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">
         <div className='flex flex-col justify-center items-center gap-3 md:w-1/2 px-2 '>
         <div className=" ">
          <h1 className='text-4xl md:5xl  text-white text-center'>
           We Build Apps That Get Trending On Appworld
          </h1>
         </div>
         
         <div >
          <p className='text-white text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae itaque quibusdam, eum, dolores voluptate in, accusamus exercitationem sequi magni temporibus ullam corporis nihil aspernatur!</p>
         </div>
         <div className="flex gap-3 items-center ">
          <a href="#home" className='text-white px-2 py-2 inline-flex  bg-blue-500 rounded-md'>Get Started</a>
          <a href="#home" className='text-white px-2 py-2 inline-flex border-slate-200 rounded-md border'>Get Started</a>
         </div>
        </div>

          <div className="md:w-1/2 pb-10">
          <img className='w-60 md:w-96' src={mobile} alt="" />
          </div>
        </div>
    </section>

    <div className='px-10 flex justify-center bg-gradient-to-r dark:from-gray-900 dark:to-gray-800'>
    <div className='shadow-lg grid grid-cols-4 container divide-x divide-slate-700 dark:bg-black dark:text-white dark:divide-slate-200 justify-center md:-translate-y-10 -translate-y-8 w-6/7 md:w-1/2 space-x-10 h-24 items-center bg-white z-40'>
       <div className="flex flex-col items-center justify-center ">
        <CountUp className='font-bold ' end={253} suffix='+' duration={3} />
        <p className="text-sm ">Clients</p>
       </div>
       <div className="flex flex-col items-center justify-center">
       <CountUp className='font-bold ' end={253} suffix='+' duration={3} />
       <p className="text-sm ">Clients</p>
       </div>
       <div className="flex flex-col items-center justify-center">
       <CountUp className='font-bold ' end={253} suffix='+' duration={3} />
       <p className="text-sm ">Clients</p>
       </div>
       <div className="flex flex-col items-center justify-center">
       <CountUp className='font-bold ' end={253} suffix='+' duration={3} />
       <p className="text-sm ">Clients</p>
       </div>
    </div>
    </div>
    </>
  )
}

export default Hero