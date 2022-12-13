import React from 'react'

function Movie({poster,title}) {
  return (
    <div className='text-black relative sm:w-[300px] sm:min-h-[300px] overflow-hidden rounded-[12px]'>
        <img src={poster} alt="poster" />
        <span>{title}</span>
    </div>
  )
}

export default Movie