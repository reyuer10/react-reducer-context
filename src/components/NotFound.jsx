import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
        <p className='font-bold text-4xl text-[#303030]'>Opps!</p>
        <p className='font-normal text-xl text-[#303030]'>Something went wrong here</p>
        <p>Go back to <Link to="/" className='underline text-blue-500'>Home page</Link></p>
    </div>
  )
}
