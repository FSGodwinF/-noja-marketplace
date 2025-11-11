import React from 'react'


const Navbar = () => {
  return (
    <div className='d-flex justify-content-around align-items-center mt-2 position-sticky top-0 shadow-sm bg-white z-3'>
        <div>
          <h1 className='fw-semibold'>Noja</h1>
          <p className='fw-light'>Break bulk. Save more.</p>
        </div>
        <div>
            <input
            type="text"
            placeholder='Search food item...'
            className='form-control rounded-3 w-100'
            />
        </div>
        <div className='d-flex gap-3'>
            <button className="btn btn-success">Sign Up/ Login</button>
            <button className='btn btn-outline-success'>My Basket</button>
        </div>
    </div>
  )
}

export default Navbar