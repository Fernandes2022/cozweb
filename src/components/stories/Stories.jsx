import React from 'react'
import blog1 from "../../assets/blog1.jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import Aos from 'aos'
import { useEffect } from 'react'

const Stories = () => {

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
    <section id='blogs' className="scroll-mt-16 dark:bg-black dark:text-white pt-10 px-3 min-h-screen">

     <div className='mt-6' data-aos="fade-right" data-aos-duration="400" data-aos-once="true">
      <h1 className="text-2xl font-semibold text-center ">
       Our Latest Blogs
      </h1>
     </div>

      <div className="flex flex-wrap gap-2 mt-8 justify-center">
       <div className="flex flex-col dark:shadow-white shadow-2xl p-4 gap-2 w-full md:w-1/4 ">
        <div className="transition hover:scale-110">
         <img className='w-full p-4' src={blog1} alt="" />
        </div>
        <div className='flex justify-between px-4 text-slate-700 dark:text-slate-300'>
         <p>November 29, 2024</p>
         <p>By Jelili</p>
        </div>
        <div>
         <h1 className="font-semibold line-clamp-1 px-4 text-xl">
          How to grow your business, How to grow your business
         </h1>
        </div>
        <div>
         <p className='line-clamp-2 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facilis. Recusandae laboriosam nobis incidunt delectus non aliquid quis. Fugit, enim sapiente! Illo, voluptatem laborum.</p>
        </div>
       </div>
       <div className="flex flex-col shadow-2xl dark:shadow-white p-4 gap-2 w-full md:w-1/4 ">
        <div className="transition hover:scale-110">
         <img className='w-full p-4' src={blog2} alt="" />
        </div>
        <div className='flex justify-between px-4 text-slate-700 dark:text-slate-300'>
         <p>November 29, 2024</p>
         <p>By Rokeeb</p>
        </div>
        <div>
         <h1 className="font-semibold line-clamp-1 px-4 text-xl">
          How to make your business system unique. How to make your business system unique
         </h1>
        </div>
        <div>
         <p className='line-clamp-2 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facilis. Recusandae laboriosam nobis incidunt delectus non aliquid quis. Fugit, enim sapiente! Illo, voluptatem laborum.</p>
        </div>
       </div>
       <div className="flex flex-col shadow-2xl p-4 gap-2 w-full md:w-1/4 dark:shadow-white ">
        <div className="transition hover:scale-110">
         <img className='w-full p-4' src={blog3} alt="" />
        </div>
        <div className='flex justify-between px-4 text-slate-700 dark:text-slate-300'>
         <p>November 29, 2024</p>
         <p>By Adeyeye</p>
        </div>
        <div>
         <h1 className="font-semibold line-clamp-1 px-4 text-xl">
          How to make your business top. How to make your business top. How to make your business topp
         </h1>
        </div>
        <div>
         <p className='line-clamp-2 px-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, facilis. Recusandae laboriosam nobis incidunt delectus non aliquid quis. Fugit, enim sapiente! Illo, voluptatem laborum.</p>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Stories