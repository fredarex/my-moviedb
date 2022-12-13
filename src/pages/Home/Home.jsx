import React from 'react'
import { logo } from '../../constant/images';

function Home() {
  return (
    <div>
      <div className='flex justify-center  items-center lg:justify-start w-full h-[140px] bg-[#292929] text-white'>
        <div className='sm:ml-[77px]'>
         <img className='w-[108px] sm:w-[193px]' src={logo} alt="logo " />
        </div>
      </div>
      <div className="flex sm:justify-center lg:justify-start bg-no-repeat bg-cover bg-[url('./assets/images/cinema.svg')] text-white pl-6 lg:pl-[77px] w-full h-[257px] sm:h-[550px]">
        <div className='flex w-[278px] mx-auto sm:mx-0 sm:max-w-[490px] text-center font-bold lg:text-left text-[28px]  sm:text-kbodymain pt-[100px]'>Watch something incredible.</div>
      </div>
      <div className='w-full pl-[28px] pr-[27px] sm:pl-[77px] sm:pr-[57px] mt-14 sm:mt-[63px]'>
        <div>Search</div>
        <input className='w-full h-[34px] sm:h-[54px] border border-[#000]' type='text' />
      </div>
    </div>
  )
}

export default Home;