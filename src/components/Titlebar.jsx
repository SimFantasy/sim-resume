import React from 'react'

const Titlebar = ({ title }) => {
  return (
    <div className='flex justify-start items-center w-full h-12'>
      <h2 className='text-2xl text-black dark:text-white font-semibold'>
        {title}
      </h2>
    </div>
  )
}

export default Titlebar
