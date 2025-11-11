import React from 'react'

const LiveStats = () => {
  return (
    <div>
        <div className='text-center'>
            <h3 className='fw-bold'>Making Bulk Buying Accessible</h3>
            <p style={{color:"gray"}}>Join thousands of satisfied customers who are saving money through smart group purchases</p>
        </div>
        <div className='container mt-5 text-center'>
            <div className='row g-4'>
                <div className='col-6 col-md-3'>
                <h2 className='fw-bold'>12,500+</h2>
                <p style={{color:"gray", fontSize:"0.85rem"}}>Happy Customers</p>
                </div>
                <div className='col-6 col-md-3'>
                <h2 className='fw-bold' style={{color:"orange"}}>₦10.5M</h2>
                <p style={{color:"gray", fontSize:"0.85rem"}}>Total savings</p>
                </div>
                <div className='col-6 col-md-3'>
                <h2 className='fw-bold'>450+</h2>
                <p style={{color:"gray", fontSize:"0.85rem"}}>Active Pools</p>
                </div>
                <div className='col-6 col-md-3'>
                <h2 className='fw-bold' style={{color:"green"}}>98%</h2>
                <p style={{color:"gray", fontSize:"0.85rem"}}>Success Rate</p>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default LiveStats