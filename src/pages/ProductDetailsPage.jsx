import { Link, useParams } from "react-router-dom";
import products from "../data/products.js";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import StarBorderTwoToneIcon from '@mui/icons-material/StarBorderTwoTone';



const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  return (
    <div className=" container-fluid mt-4">
        <div className="position-sticky top-0 bg-white p-2" style={{zIndex:10,}}>
            <Link to="/" style={{textDecoration: "none",}} className="text-success">
                <KeyboardBackspaceIcon sx={{fontSize:"1.5rem"}}/>
                <span className="ms-2 fw-semibold" style={{fontSize:"1rem"}}>Back to Products</span>
            </Link>
        </div>
        <div className="row mt-5 align-items-start">
            <div className="col-12 col-lg-6 position-relative">
                {/* Product Image Section */}
                <div className='p-3'>
                    <img className="img-fluid rounded-4"src={product.img} alt={product.name} style={{height:"350px", objectFit:"cover", width:"100%", borderRadius:"0.75rem"}}/>
                    <span className='rounded fw-semibold px-2 py-1 position-absolute top-0 end-0 m-5 text-center' style={{width:"4rem", background:"lightgray", fontSize:"0.8rem"}}>
                        {product.status}
                    </span>
                </div>
            </div>
            {/* Product Info Section */}
            <div className="col-12 col-lg-6">
                <div className="d-flex flex-column gap-2 m-3">
                    <h2 className="text-success">{product.name}</h2>
                    <span className='' style={{fontSize:"1rem", color:"gray"}}>{product.size}</span>
                    <span className='fw-bold fs-1 text-success'>₦{product.price}</span>
                </div>
                <div className="p-3 shadow-lg rounded-4">
                    <p className="" style={{fontSize:"0.8rem", color:"gray"}}>No active poll for this item yet</p>
                    <div style={{fontSize:"0.7rem", color:"gray"}} className="d-flex gap-2">
                        <p>Minimum 5 people needed.</p>
                        <span>Maximum 20 participants</span>
                    </div>
                </div>
                <div className="mt-3 d-flex flex-column gap-3">
                    <button className=" btn btn-success p-3 fs-5">Create New Pool</button>
                    <button className=" btn btn-outline-success p-3 fs-5">Add to Basket</button>
                </div>
                <div className="d-flex justify-content-around align-items-center mt-4 p-2">
                    <div style={{fontSize:"0.8rem"}} className=" d-flex gap-2 align-items-center">
                        <GppGoodOutlinedIcon/>
                        <span>Quality Assured</span>
                    </div>
                    <div style={{fontSize:"0.8rem"}} className=" d-flex gap-2 align-items-center">
                        <LocalShippingTwoToneIcon/>
                        <span>Reliable Delivery</span>
                    </div>
                    <div style={{fontSize:"0.8rem"}} className=" d-flex gap-2 align-items-center">
                        <StarBorderTwoToneIcon/>
                        <span>Trusted Sellers</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-5">
            <div>
                <h6 className="mb-3">Description</h6>
                {product.description.map((text, index)=>(
                    <p key={index} style={{fontSize:"0.86rem"}}>{text}</p>
                ))}    
            </div>
             <div>
                <h6 className="mb-3">Specifications</h6>
                <div className=" d-flex flex-column gap-3">
                    {product.details.map((item, index)=>(
                        <div key={index} className="d-flex justify-content-between" style={{fontSize:"0.86rem"}}>
                            <span className="text-muted">{item.label}</span>
                            <span className="fw-semibold">{item.value}</span>
                        </div>
                    ))}
                </div>
            </div>
             <div className="mt-4">
                <h6>Benefits</h6>
                <ul style={{fontSize: "0.85rem"}} >
                    {product.benefits.map((benefit, index)=>(
                        <li key={index} className="mb-1">
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsPage