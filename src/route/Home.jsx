import React from 'react'

export default function Home(props) {
  return (
    <div className='p-4 '>
      <div className="title font-bold text-3xl">
      <p>Home Page</p>
      </div>
      <div className="home-container">
       <p> Hello, {props.username}</p>
      </div>
    </div>

  )
}
