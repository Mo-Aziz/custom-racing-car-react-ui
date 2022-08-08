import React from 'react'
import './OptionStyles.css'

const Options = () => {
  return (
    <div name='options' className='option'>
        <div className="container">

            <div className="top">
                <h1>Options</h1>
            </div>
            <div className="bottom">
                <button className='btn btn-dark'>Ride</button>
                <button className='btn btn-dark' >Try our Speedy monsters</button>
            </div>
        </div>
    </div>
  )
}

export default Options