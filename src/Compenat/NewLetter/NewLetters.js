import React from 'react'
import './NewLetters.css'

export default function NewLetters() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive oferrs On your Email</h1>
      <p>Subscribe to our newLetetr and stay updated</p>
      <div>
        <input type="email" placeholder='your email id' />
        <button>Subscibe</button>
      </div>
    </div>
  )
}
