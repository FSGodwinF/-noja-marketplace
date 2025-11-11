import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-success text-white py-5">
        <div className='container'>
            <div className="row gy-3">
                <div className="mt-4 col-12 col-md-3">
                    <h5 className='fw-bold' style={{color: "orange"}}>Noja</h5>
                    <p style={{fontSize:"0.85rem", color:"white"}}>
                        Making bulk buying accessible to everyone. Save money, reduce waste, build community.
                    </p>
                </div>
                <div className="col-12 col-md-3">
                    <span className="text-white fw-bold" >For Buyers</span>
                    <nav className="d-flex flex-column gap-2 mt-2">
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        How it Works
                        </Link>
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        Browse Items
                        </Link>
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        Join Pool
                        </Link>
                    </nav>
                </div>
                <div className="col-12 col-md-3">
                    <span className="text-white fw-bold" >For Traders</span>
                    <nav className="d-flex flex-column gap-2 mt-2">
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        Sell on Noja
                        </Link>
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        Create Pools
                        </Link>
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        Pricing
                        </Link>
                    </nav>
                </div>
                <div className="col-12 col-md-3">
                    <span className="text-white fw-bold" >Support</span>
                        <nav className="d-flex flex-column gap-2 mt-2">
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        Help Center
                        </Link>
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        Contact Us
                        </Link>
                        <Link to="*" className="text-decoration-none text-white" style={{fontSize:"0.85rem"}}>
                        Privacy Policy
                        </Link>
                    </nav>
                </div>
            </div>
            <hr className="my-4" />
            <p className="text-center text-white" style={{fontSize:"0.85rem"}}>&copy; 2025 Noja. All rights reserved</p>
        </div>
    </footer>
    
  )
}

export default Footer