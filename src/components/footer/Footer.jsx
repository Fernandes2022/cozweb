import React from 'react'
import { Navigation, Smartphone} from 'lucide-react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="min-h-screen bg-gradient-to-r from-blue-950 to-blue-800 mt-8 rounded-tr-3xl flex flex-col gap-6 rounded-tl-3xl text-white">
      <div className="pt-16 px-4 flex gap-16 flex-col md:flex-row">
         <div className="flex flex-col gap-3 md:w-1/2">
         <h1>
          <a href="#home" className='text-white text-3xl font-bold'>
         COZ<span className='text-blue-400 tracking-tighter'>WEB</ span>
         </a>
         </h1>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse autem officia eveniet minima corporis cupiditate aliquid voluptatum. Pariatur!
         </p>
         <a href="#home" className='flex gap-2'>
          <p><Navigation /></p>
          <p>Lagos, Nigeria</p>
         </a>
         <a href="tel:+2348082972778" className='flex gap-2'>
          <p><Smartphone /></p>
          <p>+234 8082972778</p>
         </a>
         </div>

         <div className="flex flex-col sm:flex-row gap-10  text-white">

         <div className="flex flex-col gap-3 md:w-1/2">
          <h1 className="text-2xl font-semibold">
           Important Links
          </h1>
          <ul className="flex flex-col gap-3">
           <li><a href="#home">Home</a></li>
           <li><a href="#home">About</a></li>
           <li><a href="#service">Services</a></li>
           <li><a href="#home">Login</a></li>
          </ul>
         </div>
         <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">
          Links
          </h1>
          <ul className="flex flex-col gap-3">
           <li><a href="#home">Privacy Policy</a></li>
           
           <li><a href="#service">Services</a></li>
           <li><a href="#home">About us</a></li>
          </ul>
         </div>
         <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold">
           Social Links
          </h1>
          <div className="flex flex-col gap-6">
           <div>
           <p>Subscribe to our newsletter</p>
           </div>
           <div><input type="email" placeholder='Email' className='text-black rounded-lg p-1 w-36' /></div>

           <div className='flex  gap-3'>
            <FaInstagram className=' h-6'/>
            <FaFacebook className='h-6'/>
            <FaLinkedin className=' h-6'/>

            
           </div>
          </div>
         </div>
         
         </div>
      </div>

      
      <div className=" mt-60 ">
       <div className="bg-blue-300 h-1"></div>
      <p className=" text-center text-white">
            Copyright &copy; 2024. All rights reserved
            <p>
            Designed by Timi-tech (X: @Timi_tech_)
            </p>
            </p>
      </div>
    </footer>
  )
}

export default Footer