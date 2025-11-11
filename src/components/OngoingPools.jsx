import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import bellPepper from "../assets/images/bellPepper.jpg";
import garlic from "../assets/images/garlic.jpg";
import maize from "../assets/images/maize.jpg";
import onion from "../assets/images/onion.jpg";
import sweetPotatoes from "../assets/images/sweetPotatoes.jpg"
import plantain from "../assets/images/plantain.jpg";
import ProductCard from './ProductCard';

const OngoingPools = () => {
    const activePools = [
        {id:1, img: maize, name:"Yellow Corn", size: "50KG Bag", price: 45000, status: "Fresh", participants: "12", timeLeft: "2 days", variant:"join"},
        {id:2, img: plantain, name:"Plantain", size: "50KG Bag", price: 33000, status: "Fresh", participants: "8", timeLeft: "4 hours", variant:"join"},
        {id:3, img: sweetPotatoes, name:"Sweet Potatoes", size: "40KG Bag", price: 30000, status: "Fresh", participants: "5", timeLeft: "3 days", variant:"join"},
        {id:4, img: garlic, name:"Garlic", size: "25KG Bag", price: 20000, status: "Fresh", participants: "10", timeLeft: "1 hour", variant:"join"},
        {id:5, img: bellPepper, name:"Bell Pepper", size: "10KG Bag", price: 25000, status: "Fresh", participants: "5", timeLeft: "30 minutes", variant:"join"},
        {id:6, img: onion, name:"Onion", size: "50KG Bag", price: 30000, status: "Fresh", participants: "6", timeLeft: "30 minutes", variant:"join"},
    ];
    return (
     <div className='m-4 d-flex flex-column'>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h3 className='fw-bold'>Ongoing Pools</h3>
                <p className='' style={{color:'gray'}}>Join active group purchases and save on bulk orders</p>
            </div>
            <div className='d-flex gap-2 justify-content-center'>
                <p className='fw-semibold mb-0'style={{fontSize:'0.8rem'}}>View All</p>
                <ArrowRightAltIcon sx={{fontSize:"0.95rem"}}/>
            </div>
        </div>
        <div className='row g-4 mt-3 justify-content-center'>
            {activePools.map(pool=>(
                <div key={pool.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    <ProductCard {...pool}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OngoingPools