import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ProductCard from './ProductCard';
import products from '../data/products';

const OpenItems = () => {

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