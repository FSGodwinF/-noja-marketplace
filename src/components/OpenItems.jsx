import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ProductCard from './ProductCard';
import rice from '../assets/images/rice.jpg';
import beans from '../assets/images/beans.jpg';
import potatoes from '../assets/images/potatoes.jpg';
import tomatoes from '../assets/images/tomatoes.jpg';

const OpenItems = () => {

  const products = [
    {id:1, img: rice, name:"Premium Rice", size: "50KG Bag", price: 50000, status: "Fresh"},
    {id:2, img: beans, name:"Brown Beans (Oloyin)", size: "25KG Bag", price: 35800, status: "Fresh"},
    {id:3, img: potatoes, name:"Potatoes", size: "50KG Bag", price: 45000, status: "Fresh"},
    {id:4, img: tomatoes, name:"Tomatoes", size: "30KG Basket", price: 28500, status: "Fresh"}
  ];

  return (
    <div className='m-4 d-flex flex-column'>
        <div className='d-flex justify-content-between align-items-center'>
            <div>
                <h3 className='fw-bold'>Open Items</h3>
                <p className='' style={{color:'gray'}}>Start a new group purchase or create your own pool</p>
            </div>
            <div className='d-flex gap-2 justify-content-center'>
                <p className='fw-semibold mb-0'style={{fontSize:'0.8rem'}}>View All</p>
                <ArrowRightAltIcon sx={{fontSize:"0.95rem"}}/>
            </div>
        </div>
        <div className='row g-4 mt-3 justify-content-center'>
            {products.map((item)=>(
                <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    <ProductCard {...item}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OpenItems