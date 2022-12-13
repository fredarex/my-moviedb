import React from 'react'
import { logo } from '../../constant/images';

function Home() {
  return (
    <div>
      <div className='flex justify-center  items-center lg:justify-start w-full h-[140px] bg-[#292929] text-white'>
        <div className='ml-[77px]'>
         <img src={logo} />
        </div>
       
      </div>
    </div>
  )
}

export default Home;