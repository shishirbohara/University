import React from 'react'
import './University.css'
import img_1 from '../../assets/img1.jpg'
import img_2 from '../../assets/img2.jpg'
import img_3 from '../../assets/img3.png'
import img_4 from '../../assets/img4.jpg'



const Unviersity = () => { 
  return (
    <div className='university'>
        <div className="gallery">
            <img src={img_1} alt="" />
            <img src={img_2} alt="" />
            <img src={img_3} alt="" />
            <img src={img_4} alt="" />
        </div>
        
    </div>
  )
}

export default Unviersity
