import { ChevronDown, Menu, PhoneCallIcon, SunIcon, X, User2, User, MoonIcon } from 'lucide-react'
import React from 'react'
import { useState, useEffect } from 'react';

const Navbar = () => {

const [toggle, openToggle] = useState(false);

const toggleOption = () => {
  openToggle(!toggle)
}

const [theme, setTheme] = useState(localStorage.getItem('theme')? localStorage.getItem('theme'): "light");
const element = document.documentElement;

useEffect(() => {
  if(theme === "dark"){
    element.classList.add('dark') 
      localStorage.setItem('theme', 'dark')
  } else {
    element.classList.remove('dark')
    localStorage.removeItem("theme")
  }
    
}, [theme])


  return (
   <header className='bg-gradient-to-r from-blue-700 to-blue-600 fixed right-0 top-0 left-0 border-b-slate-200 border-b'>
   <div className="container flex px-2 py-4 items-center justify-between z-50">

     <div>
      <h1>
       <a href="#home" className='text-white text-3xl font-bold'>
        COZ<span className='text-blue-400 tracking-tighter'>WEB</span>
       </a>
      </h1>
     </div>

     <div className='hidden md:block md:z-30'>
      <ul className='flex text-white text-xl gap-10 items-center justify-center
      '>
       <li className='relative cursor-pointer  group items-center justify-center '>
       <div className="flex items-center">
        <p>Home</p>
        <ChevronDown
        className='w-4 group-hover:rotate-180 transition-all duration-300' />
        </div>

        <div className='hidden absolute group-hover:block rounded-md dark:bg-black  bg-white z-50  -right-9 w-48 shadow-lg py-6'>
         <div className="flex flex-col gap-4 justify-center px-4 py-2 text-black  dark:text-slate-200">
          <h1><a href="#service">Service</a></h1>
          <h1><a href="#about">About us</a></h1>
          <h1><a href="#privacy">Privacy policy</a></h1>
         </div>
        </div>
       </li>
       
       <li className=' cursor-pointer  group items-center justify-center transition-all duration-300 '>
       <div className="flex items-center">
        <p>Service</p>
        <ChevronDown
        className='w-4 group-hover:rotate-180 transition-all duration-300' />
        </div>

        <div className='hidden md:z-50
         absolute group-hover:block z-30 mx-auto left-0 right-0 dark:bg-black dark:text-white bg-white  rounded-b-3xl shadow-lg  py-6'> 
          <div className="flex gap-12 justify-center items-center  px-3 py-2 ">
            <div >
              <img className='w-full' src="https://picsum.photos/200" alt="Not found" />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4">
                <h1 className='font-bold text-black dark:text-white'>
                  Best Selling
                </h1>
                <p className="text-slate-400 text-sm">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non explicabo illum consectetur quis eligendi magni saepe placeat, ad voluptatibus ex, ducimus unde, harum quaerat.
                </p>
              </div>

              <div className="flex gap-6 items-center ">
                <div className="flex flex-col gap-3 text-black dark:text-white">
                  <h1 className="font-bold ">
                    Development
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li><a href="development">Web Development</a></li>
                    <li><a href="development">IOS App Development</a></li>
                    <li><a href="development">Android Development</a></li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 dark:text-white text-black ">
                  <h1 className="font-bold ">
                    Other Services
                  </h1>
                  <ul className="flex flex-col gap-3">
                    <li><a href="development">Cloud Services</a></li>
                    <li><a href="development">Mobile App</a></li>
                    <li><a href="development">App Development</a></li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <img src="https://picsum.photos/200" alt="Not found" />
                </div>
              </div>
            </div>
          </div>
        </div>
       </li>


       <li>
        <a href="#about">
         About us
        </a>
       </li>
       <li className='flex gap-3 justify-center items-center'>
        <h1>
         <a href="tel:2348082972778">
          <PhoneCallIcon />
         </a>
        </h1>
        <h1>
         <p className="text-sm">
          Call us on:
         </p>
         <a href="tel:2348082972778" className='text-sm'>
          +234 8082972778
         </a>
        </h1>
       </li>
       <li className='cursor-pointer'>
        {theme === 'dark' ?( <SunIcon onClick={() => setTheme("light")}/>)
        : (<MoonIcon onClick={() => setTheme("dark")}/>)  
      }
       </li>
      </ul>
     </div>

      
     <div className="md:hidden flex gap-2">
     <div className=" text-white cursor-pointer">
      {theme === 'dark' ?( <SunIcon onClick={() => setTheme("light")}/>)
        : (<MoonIcon onClick={() => setTheme("dark")}/>)  
      }
      </div>
      <button className="text-white" onClick={toggleOption}>
      {toggle ? <X /> : <Menu />}
      </button>

      {toggle && <div className="absolute w-3/4 transition-all duration-500 bg-gradient-to-r from-slate-950 to-slate-800 text-white px-8 py-6 -left-0 mt-11 flex flex-col gap-8 h-screen  ">
            <div className="flex flex-col space-y-8">
              <div className="flex gap-4">
                <div className='border rounded-full p-2 bg-white'>
                  <User2 className='text-black w-8 h-8'/>
                  
                </div>
                <div>
                  <h1>Jelili Rokeeb Adeyeye</h1>
                  <p className="text-slate-500">
                    Premium user
                  </p>
                </div>
              </div>

              <div>
                <ul className='space-y-8 text-xl'>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#blogs">Top Stories</a></li>
                  <li><a href="#home">Submit your story</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>

          <div className="mb-0 mt-28">
            <p className=" text-center">
            Copyright &copy; 2024. All rights reserved
            <p>
            Designed by Timi-tech (X: @Timi_tech_)
            </p>
            </p>
         </div>
      </div>}
     </div>
   </div>
 </header>
  )
}

export default Navbar