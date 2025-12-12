import {useState} from 'react';
import { useAuth } from '../../context/AuthContext';
import ArrowDropUpTwoToneIcon from '@mui/icons-material/ArrowDropUpTwoTone';
import ArrowDropDownTwoToneIcon from '@mui/icons-material/ArrowDropDownTwoTone';



const Navbar = () => {
  const {openAuthModal} = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () =>{
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleOptionClick = (type) => {
    openAuthModal(type);
    setIsDropdownOpen(false);// close dropdown after selection
  }

  return (
    <div className='d-flex justify-content-around align-items-center mt-2 position-sticky top-0 shadow-sm bg-white z-3'>
        <div>
          <h1 className='fw-bold'>Noja</h1>
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
          {/*Dropdown Button*/}
          <div className='position-relative'>
            <button className="btn btn-success d-flex gap-1 align-items-center"
            onClick={toggleDropdown}>
              Sign Up/ Login
              {isDropdownOpen ? <ArrowDropUpTwoToneIcon/>
             : <ArrowDropDownTwoToneIcon />
              }
            </button>
            {/*Dropdown Menu*/}
            {isDropdownOpen && (
              <div className='position-absolute bg-white rounded shadow mt-2'
              style={{
                minWidth: '200px',
                right:0,
                zIndex: 1000,
              }}>
                <div
                className='py-2 px-3 text-muted text-center'
                style={{
                  cursor:'pointer',
                  borderBottom: '1px solid #dee2e6'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                onClick={()=> handleOptionClick('buyerSignup')}>
                  Sign up as Buyer
                </div>
                <div
                className='py-2 px-3 text-muted text-center'
                style={{
                  cursor:'pointer',
                  borderBottom: '1px solid #dee2e6'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                onClick={()=> handleOptionClick('traderSignup')}>
                  Sign up as Trader
                </div>
                <div
                className='py-2 px-3 text-muted text-center'
                style={{
                  cursor:'pointer',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'white'}
                onClick={()=> handleOptionClick('login')}>
                  Login
                </div>
              </div>
            )}
          </div>
            
            <button className='btn btn-outline-success'>My Basket</button>
        </div>
    </div>
  )
}

export default Navbar