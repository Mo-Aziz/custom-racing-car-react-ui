import React from 'react'
import './PowerStyles.css'

const Power = () => {
  return (
    <div name='power' className='power'>
        <div className="container">

            <div className="top">
                <h1>Power</h1>
            </div>
            <div className="bottom">
                <button className='btn btn-dark'>Ride</button>
                <button className='btn btn-dark' >Own a Monster</button>
            </div>
        </div>
    </div>
  )
}

export default Power