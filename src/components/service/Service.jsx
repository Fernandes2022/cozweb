import React from 'react'
import blog3 from "../../assets/blog3.jpg"
import blog2 from "../../assets/blog2.jpg"
import Aos from 'aos'
import { useEffect } from 'react'


const Service = () => {

    
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
    <section id='service' className='bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 dark:text-white from-gray-200 to-gray-100 h-full'>
      <div className="px-3 ">
       <div className="flex flex-col  gap-8 pt-10" data-aos="fade-right" data-aos-duration="400" data-aos-once="true">
        <div className="flex flex-col-reverse md:flex-row gap-4">
         <div className='md:w-1/2 '>
          <img className='w-full' src={blog3} alt="" />
         </div>
         <div className="flex flex-col gap-3  md:w-1/2">
          <div>
           <h1 className="text-2xl">
            We Build Apps That Get Trending On Appworld
           </h1>
          </div>
          <div>
           <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime. Impedit laborum, assumenda, pariatur aliquid voluptates aut est rerum dicta aliquam odio suscipit a.
           </p>
          </div>
          <div>
           <li>
            Lorem ipsum dolor sit amet consectetur.
           </li>
           <li>Lorem ipsum dolor sit amet.</li>
           <li>Lorem ipsum dolor sit.</li>
          </div>
          <div>
           <a href="#home" className='p-2 inline-flex items-center bg-blue-700 rounded-md text-white'>
            Get Started
           </a>
          </div>
         </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
         
         <div className="flex flex-col gap-3  md:w-1/2">
          <div>
           <h1 className="text-2xl">
            We Build Apps That Get Trending On Appworld
           </h1>
          </div>
          <div>
           <p className="text-slate-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, maxime. Impedit laborum, assumenda, pariatur aliquid voluptates aut est rerum dicta aliquam odio suscipit a.
           </p>
          </div>
          <div>
           <li>
            Lorem ipsum dolor sit amet consectetur.
           </li>
           <li>Lorem ipsum dolor sit amet.</li>
           <li>Lorem ipsum dolor sit.</li>
          </div>
          <div>
           <a href="#home" className='p-2 inline-flex items-center bg-blue-700 rounded-md text-white'>
            Get Started
           </a>
          </div>
         </div>
         <div className='md:w-1/2 '>
          <img className='w-full' src={blog2} alt="" />
         </div>
        </div>
       </div>
      </div>
    </section>
    </>
  )
}

export default Service