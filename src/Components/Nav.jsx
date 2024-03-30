import React from 'react';

const Nav = () => {
  return (
    <div className='w-full px-20 py-10 flex justify-between items-center fixed top-0 z-[999] text-fuchsia-50'>
      <div className='logo w-10 h-10'>
         <img src="https://i.pinimg.com/236x/55/6c/88/556c886e78ca47302faa483c2302a1ac.jpg" alt="" />
      </div>
      <div className='link flex gap-10'>
        {["work", "stodio", "news", "Contact"].map((item, index) => (
          <a key={index} className='text-sm font-regular capitalize text-fuchsia-50 hover:text-[2vw]'>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nav;
