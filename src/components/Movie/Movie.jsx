import React from 'react'

function Movie({poster,title}) {
  return (
    <div className='text-black relative sm:w-[300px] sm:min-h-[300px] overflow-hidden rounded-[12px]'>
        <img src={poster} alt="poster" />
        <span className='absolute top-[35%] left-[20%] text-[18px] z-10 text-white'>{title}</span>
    </div>
  )
}

export default Movie