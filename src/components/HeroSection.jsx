import React from 'react'
import hero from '../assets/Hero/hero.png';


const HeroSection = () => {
  return (
    <div className='position-relative d-flex align-items-center justify-content-center text-center' 
    style={{maxwidth: "100vw", height:'70vh',overflow: "hidden" }}
    >
      <img className=" img-fluid position-absolute w-100 h-100 top-0 start-0" 
      src={hero} 
      alt="hero-image" 
      style={{objectFit:"cover", zIndex: -1}} />
      <div className='px-4' style={{maxWidth:"700px"}}>
        <h1 className='fw-bold text-light display-4'>Buy in Bulk,</h1>
        <h1 className='fw-bold display-4' style={{color:"#2ECC71"}}>Save Together.</h1>
        <p className='mb-4 lead text-light'>Join group purchases and split costs on quality food items. From rice
        to vegetables, get wholesale prices without the bulk commitment.
        </p>
        <div className='d-flex justify-content-center gap-3 '>
          <button className='btn btn-success btn-lg'>
          Start Shopping
          </button>
          <button className='btn btn-outline-light btn-lg'>
          Join Noja
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection