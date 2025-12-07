import { useAuth } from "../context/AuthContext";
import {useState} from 'react';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import LockOutlineTwoToneIcon from '@mui/icons-material/LockOutlineTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';

const Layout = ({children}) => {
  const {isAuthOpen, closeAuthModal} = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisbility =()=>{
    setShowPassword(!showPassword);
  }

  return (
    <div>
        {children}
        {/* Modal implementation can go here, utilizing isAuthOpen and closeAuthModal */}
        {isAuthOpen && (
          <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{background:"rgba(0,0,0,0.5)", zIndex:9999}}
          onClick={closeAuthModal}
          >
            <div
            className="bg-white p-4 rounded shadow"
            style={{maxWidth: '400px', width: '90%'}}
            onClick={(e)=> e.stopPropagation()}
            >
              <button className="btn-close float-end"
              onClick={closeAuthModal}>
              </button>

              <div className="text-center mb-4">
                <h3 className="fw-bold">Welcome Back</h3>
                <p className="text-muted">Login to your Noja account</p>
              </div>
              {/*Form*/}
              <form>
                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <MailOutlineTwoToneIcon className="text-muted"/>
                    </span>
                    <input type="email"
                    className="form-control"
                    placeholder="Enter your email" />
                  </div>
                </div>
                {/* Password Input */}
                <div>
                  <label htmlFor="password" className="form-label">Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white">
                      <LockOutlineTwoToneIcon className="text-muted"/>
                    </span>
                    <input type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter your password"
                    />
                    <span
                    className="input-group-text bg-white"
                    onClick={togglePasswordVisbility}
                    style={{cursor: 'pointer'}}
                    >
                      {showPassword ?
                      <VisibilityOffTwoToneIcon className="text-muted"/> :
                      <VisibilityTwoToneIcon className="text-muted"/>}  
                    </span>
                  </div>
                </div>
                {/* Buttons */}
                <div className="d-grid gap-3 mt-5">
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                  <button type="button" className=" btn btn-warning text-white">
                    Quick Admin Access
                  </button>          
                </div>
                {/*Forgot Password*/}
                <div className="text-center">
                  <a href="#!" className="text-decoration-none mt-3 d-block" style={{fontSize:"0.9rem"}}>
                    Forgot Password?
                  </a>
                  <p className="mb-0">
                     Don't have an account? {''} 
                     <a href="#"
                  className="text-decoration-none" style={{fontSize:"0.9rem"}}>
                    Sign up
                  </a>    
                  </p>
                  
                </div>
              </form>
            </div>

          </div>
        )}
    </div>
  )
}

export default Layout;