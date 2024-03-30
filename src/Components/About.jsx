 import { motion } from 'framer-motion'
import React from 'react'

 
 const About = () => {
   return (
     <div className='w-full min-h-screen bg-slate-900 relative'>
       <div className=' relative  bg-black'>
          <img className='absolute top-0' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/659555cf4a799af9cb3fa7f1_img-bg-cosmo-p-2000.png" alt="" />
         <h3 className='text-[15vw] z-50 text-stone-700 absolute left-[25%]'>marsh</h3>
        <video data-scroll data-scroll-speed=".2" autoPlay muted loop className='w-[50vw] absolute right-[25%] object-cover opacity-80 top-10' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/659042e86972c22d34a94b29_mars_-_65129%20(1080p)-transcode.mp4"></video>
        </div>
       <div className='image w-full h-[35vw] relative'>
        
        <img data-scroll data-scroll-speed=".2" className='absolute w-[30vw] h-1/2 left-[10%] bottom-0' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/65df62b1641aa31316f188a7_bg-count-img-p-2000.png" alt="" />
        <img data-scroll data-scroll-speed=".6" className='absolute h-1/2 right-[13%] -bottom-[10%]' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/659555cf4a799af9cb3fa7f1_img-bg-cosmo-p-800.png" alt="" />
        <h1 className='text-7xl absolute top-[130%] font-semibold left-20 text-stone-700'>The Journey of</h1>
        <h4 className='text-7xl absolute top-[140%] right-[30%] font-semibold  text-stone-700'>Space</h4>

       </div>
       <div className='w-full py-10 px-20 mt-32 text-black'>
        <div className='w-1/2 mx-auto'>
        <h1 className='text-7xl'> animi quibusdam assumenda perspiciatis iusto ut unde perferendis officiis consectetur fuga.</h1>
        <h4 className='text-xl opacity-50 font-light'>inter in the world </h4>
        <h4 className='text-xl opacity-50 font-light'>inter in the world </h4>
        </div>
       </div>
       <div className='marquee text-black whitespace-nowrap overflow-hidden flex'>
        <motion.div initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='boxs flex m-2 relative min-w-[120vw]'>
        <div className='box   m-2 w-[30vw] h-[30vh]  rounded-lg'>
          <img className='w-full h-full object-cover rounded-lg' src="https://i.pinimg.com/236x/06/f2/97/06f297933b875641719f6e8a9a0591e0.jpg" alt="" />
        </div>
        <div className='box    m-2 w-[30vw] h-[30vh]  rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://i.pinimg.com/236x/19/8c/db/198cdbd83f1b88313f9a3da32b389d40.jpg" alt="" />

        </div>
        <div className='box z-50 m-2 w-[30vw] h-[30vh]  rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://d2kq0urxkarztv.cloudfront.net/5fcb8cb7333e1d00c3e8bd52/4431976/image-0267fad9-0804-48cd-b8a4-78867dd7bfbd.jpg?w=568&e=webp&cX=0&cY=0&cW=1394&cH=908" alt="" />

        </div>
        <div className='box z-50 m-2 w-[30vw] h-[30vh]  rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://i-p.rmcdn.net/5fcb8cb7333e1d00c3e8bd52/4653387/image-b648f958-8fed-4691-96a0-326cdfd23ddb.jpg?e=webp&cX=0&cY=1&cW=1218&cH=811" alt="" />

        </div><div className='box z-50 m-2 w-[30vw] h-[30vh]  rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://images.unsplash.com/photo-1709828593764-369ed437b1ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4M3x8fGVufDB8fHx8fA%3D%3D" alt="" />

        </div>
         
         
        </motion.div>
        <motion.div initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='boxs flex m-2 relative min-w-[120vw]'>
        <div className='box z-50  m-2 w-[30vw] h-[30vh]   rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://i.pinimg.com/236x/1c/cc/08/1ccc089a35f742dc044e657770836079.jpg" alt="" />

        </div>
        <div className='box z-50   m-2 w-[30vw] h-[30vh]   rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://i.pinimg.com/236x/32/a6/b1/32a6b131b3e64167fb359c41b0677db8.jpg" alt="" />

        </div>
        <div className='box z-50 m-2 w-[30vw] h-[30vh]   rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/65a4165b3dc6f80f36d6fa81_2-p-2000.jpeg" alt="" />

        </div>
        <div className='box z-50 m-2 w-[30vw] h-[30vh]   rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/659555cf4a799af9cb3fa7f1_img-bg-cosmo-p-2000.png" alt="" />

        </div>
        <div className='box z-50 m-2 w-[30vw] h-[30vh]   rounded-lg'>
        <img className='w-full h-full object-cover rounded-lg' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/65a4165b3dc6f80f36d6fa81_2-p-2000.jpeg" alt="" />

        </div>
         
        
        
        </motion.div>
         
        {/* <motion.h1 initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}} className='text-[13vw]'>see the world</motion.h1>
        <motion.h1  initial={{x: 0}} animate={{x: "-100%"}} transition={{ease: "linear", repeat: Infinity, duration: 5}}  className='text-[13vw] ml-3'>see the world</motion.h1> */}
       </div>
     </div>
   )
 }
 
 export default About
 