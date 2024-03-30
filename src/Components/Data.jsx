 import { motion } from 'framer-motion'
import React from 'react'
 
 const Data = () => {
   return (
     <div className='w-full py-10 relative'>
          <img className='w-full min-h-[100vh] absolute  ' src="https://assets-global.website-files.com/658a75a8d73e09aac4ef3282/65a4165b3dc6f80f36d6fa81_2-p-2000.jpeg" alt="" />
        <div className='w-1/2 mx-auto'>
            {['Journey ', 'success', 'Yang', 'Confident'].map((i, index) =>{
                return <div className='master overflow-hidden'>
                <motion.h1
                 initial={{y: "100%", opacity: 0,  }}
                 whileInView={{y: 0, opacity: 1, }}
                  transition={{ease:[0.76, 0, 0.24, 1], duration: 1}} className='text-[12vw] leading-none tracking-tight flex items-center'>
                    {index === 2 && (<span className='inline-block w-32 h-5 mt-10 bg-slate-500'></span>)}
                    {i}
                    </motion.h1>
                 </div>
            })}
             
        

        {/* <h1 className='text-[12vw] flex items-center leading-[11vw] tracking-tight'><span className='inline-block w-32 h-5 mt-10 bg-slate-500'></span>Yang</h1>
        <h1 className='text-[12vw] leading-none tracking-tight'>Confident</h1>
         */}

        </div>
         
     </div>
   )
 }
 
 export default Data
 