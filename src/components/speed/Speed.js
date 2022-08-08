import React from 'react'
import './SpeedStyles.css'

const Speed = () => {
  return (
    <div className='speed'>
        <div className="container">

            <div className="top">
                <h1>Speed</h1>
            </div>
            <div className="bottom">
                <button className='btn btn-dark'>Ride</button>
                <button className='btn btn-dark' >Try Speed Monster</button>
            </div>
        </div>
    </div>
  )
}

export default Speed