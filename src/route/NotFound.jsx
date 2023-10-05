import React from 'react'
import { Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex h-screen justify-center items-center flex-col'>
        <p className='font-semibold text-[40px] text-[#303030]'>Oppxs!</p>
        <p className='font-bold text-[50px] text-[#303030]'>Looks what we have here!!</p>
        <p className='font-semibold text-20px text-[#303030]'>Back to go <Link className='underline' to="/">home page</Link> </p>
    </div>
  )
}
