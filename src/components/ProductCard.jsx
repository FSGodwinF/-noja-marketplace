import React from 'react'


const ProductCard = ({img, name, size, price, status, participants, timeLeft, variant = 'open',}) => {
  return (
    <div className='card position-relative h-100 rounded-4 shadow-sm'>
        <div className='p-3'>
            <img className="img-fluid rounded-4"src={img} alt={name} style={{height:"180px", objectFit:"cover", width:"100%", borderRadius:"0.75rem"}}/>
        </div>
        <span className='rounded fw-semibold px-2 py-1 position-absolute top-0 end-0 m-4 text-center' style={{width:"4rem", background:"lightgray", fontSize:"0.8rem"}}>
            {status}
        </span>
        <div className='d-flex flex-column gap-2 m-3'>
            <div className='d-flex flex-column gap-1'>
                <h5>{name}</h5>
                <span className='' style={{fontSize:"0.9rem", color:"gray"}}>{size}</span>
                {participants && (
                    <p style={{fontSize:"0.8rem", color:"gray"}}>
                        {participants} people joined
                    </p>
                )}
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <span className='fw-bold fs-5'>₦{price}</span>
                {timeLeft && (
                    <span style={{fontSize:"0.8rem", color:"orange"}}>
                        {timeLeft} left
                    </span>
                )}
            </div>
        </div>
        {
            variant === 'open' ?(
            <div className='d-flex flex-column gap-3 m-3'>
                <button className='btn btn-success'>
                View Details
                </button>
                <button className='btn btn-outline-success'>
                Create New Pool
                </button>
            </div>
            ):(
                <button className='btn btn-success m-3'>Join Pool</button>
            )}
        
    </div>
  )
}

export default ProductCard