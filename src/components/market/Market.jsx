import React from 'react'

const Market = () => {
  return (
    <div className="bg-blue-600 mt-1">
     <div className="p-6 flex flex-col md:flex-row gap-4 text-white">
      <div className=''>
        <iframe className='w-full aspect-video' src="https://www.youtube.com/watch?v=LoYbN6qoQHA" allowFullScreen allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'  frameborder="0"></iframe>
      </div>
      <div className="md:w-1/2 flex gap-3 flex-col items-center md:items-start">
        <div>
         <h1 className='text-2xl'>Market your Brand</h1>
        </div>
        <div>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore tempore quidem illo soluta ipsa! Maxime, ex libero. Laboriosam hic delectus doloribus sed neque dolor illum nam, saepe inventore, adipisci quibusdam.</p>
        </div>
        <div>
         <a href="#home" className='p-2 inline-flex text-black bg-white rounded-md'>Get Started</a>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Market