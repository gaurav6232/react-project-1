import { motion } from 'framer-motion'
import React from 'react'


const LandingPage = () => {
  return (
    <motion.div
     
    className='w-full h-[200vh] relative overflow-hidden bg-zinc-900'>
         

       <img data-scroll data-scroll-speed="-1.2" className='w-full h-full object-cover opacity-80 scale-50' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/65df62b1641aa31316f188a7_bg-count-img-p-2000.png" alt="" />
       <div className='container ml-20 w-full h-full absolute  top-[5%] left-0'>
        <div className='maintext'>
        <h1 className='text-[10vw] leading-none tracking-tight font-regular ml-52 text-gray-400'>WelCome To</h1>
        <h1 className='text-[10vw] leading-none tracking-tight font-regular ml-72 text-gray-400'>Inner</h1>
        <h1 className='text-[10vw] leading-none tracking-tight font-regular ml-96 text-gray-400'>World</h1>
        </div>

        <div className='w-full h-full left-0 relative bg-black mt-36'>
          <h1 className='text-[20vw] absolute font-bold opacity-80 z-50 text-white'> 100,600</h1>
        <h3 className='text-[4vw] text-zinc-400 top-[30%] absolute'>Ethnic Armenians</h3>
        <h3 className='text-[4vw] text-zinc-400 top-[33%] left-[22%] absolute'>forcibly displaced from Artsakh</h3>
        <h3 className='text-[4vw] text-zinc-400 top-[36%] left-[60%] absolute'>(Nagorno-Karabakh)</h3>
          <img className='object-cover h-full w-full z-40 absolute top-[-10%]' src="https://d3n32ilufxuvd1.cloudfront.net/5fcb8cb7333e1d00c3e8bd52/4431976/Image-97175640-652a-4fc8-862c-3789d5b4f159.svg" alt="" />
        <img data-scroll data-scroll-speed=".6"  className='absolute h-52 object-cover left-[10%] top-[10%]' src="https://d2kq0urxkarztv.cloudfront.net/5fcb8cb7333e1d00c3e8bd52/4431976/image-0267fad9-0804-48cd-b8a4-78867dd7bfbd.jpg?w=568&e=webp&cX=0&cY=0&cW=1394&cH=908" alt="" />
        <img data-scroll data-scroll-speed="-1.7" className='absolute h-52 object-cover left-[50%] top-[25%]' src="https://i-p.rmcdn.net/5fcb8cb7333e1d00c3e8bd52/4653387/image-b648f958-8fed-4691-96a0-326cdfd23ddb.jpg?e=webp&cX=0&cY=1&cW=1218&cH=811" alt="" />
        <img data-scroll data-scroll-speed=".6" className='absolute h-52 object-cover left-[80%] top-[10%]' src="https://images.unsplash.com/photo-1709828593764-369ed437b1ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D" alt="" />

        </div>
  


       </div>

        
       
   
    </motion.div>
  )
}

export default LandingPage
