// import React from 'react'
import FF from '../assets/battery.jpg'
import YY from '../assets/hy.jpg'
import GG from '../assets/photo1.jpg'
function Cards() {
  return (
    <div>
      <div className="card_container">
        <div className="single_card">
            <img src={YY} alt="hbhjbjklnljk" />
            <h4>Lorem ipsum dolo.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita inventore eius,placeat, </p>
        </div>
        <div className="single_card">
            <img src={FF} alt="hbhjbjklnljk" />
            <h4>Lorem ipsum dolo.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita inventore eius,placeat, </p>
        </div>
        <div className="single_card">
            <img src={GG} alt="hbhjbjklnljk" />
            <h4>Lorem ipsum dolo.</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Expedita inventore eius,placeat, </p>
        </div>
      </div>

    </div>
  )
}

export default Cards