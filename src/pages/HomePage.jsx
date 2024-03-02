import React from 'react'
import { Banner } from '../components'

const HomePage = () => {
  return (
    <div className=" flex flex-col scroll-smooth ">
        <Banner/>
        <div className='h-[1000px]'></div>
    </div>
  )
}

export default HomePage