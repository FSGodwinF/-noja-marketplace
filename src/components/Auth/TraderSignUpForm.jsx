import { useState } from 'react';
import MailOutlineTwoToneIcon from '@mui/icons-material/MailOutlineTwoTone';
import LockOutlineTwoToneIcon from '@mui/icons-material/LockOutlineTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@mui/icons-material/VisibilityOffTwoTone';
import PhoneTwoToneIcon from '@mui/icons-material/PhoneTwoTone';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

const TraderSignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };
  
    return (
    <div>
        <form>
            {/* First Name and Last Name */}
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input 
                    type="text" 
                    id="firstName"
                    className="form-control" 
                    placeholder="Jane"
                    />
                </div>
                <div className="col">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input 
                    type="text" 
                    id="lastName"
                    className="form-control" 
                    placeholder="Smith"
                    />
                </div>
            </div>

            {/* Email Address */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <div className="input-group">
                    <span className="input-group-text bg-white">
                    <MailOutlineTwoToneIcon className="text-muted" />
                    </span>
                    <input 
                    type="email" 
                    id="email"
                    className="form-control" 
                    placeholder="janesmith@email.com"
                    />
                </div>
            </div>

            {/* Phone Number */}
            <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <div className="input-group">
                    <span className="input-group-text bg-white">
                    <PhoneTwoToneIcon className="text-muted" />
                    </span>
                    <input 
                    type="tel" 
                    id="phone"
                    className="form-control" 
                    placeholder="+234 801 234 5678"
                    />
                </div>
            </div>

            {/* Business Name */}
            <div className="mb-3">
                <label htmlFor="businessName" className="form-label">Business Name</label>
                <input 
                    type="text" 
                    id="businessName"
                    className="form-control" 
                    placeholder="Your business name"
                />
            </div>

            {/* Business Address */}
            <div className="mb-3">
                <label htmlFor="businessAddress" className="form-label">Business Address</label>
                <div className="input-group">
                    <span className="input-group-text bg-white">
                    <LocationOnTwoToneIcon className="text-muted" />
                    </span>
                    <input 
                    type="text" 
                    id="businessAddress"
                    className="form-control" 
                    placeholder="Your business address"
                    />
                </div>
            </div>

            {/* Password */}
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                    <span className="input-group-text bg-white">
                    <LockOutlineTwoToneIcon className="text-muted" />
                    </span>
                    <input 
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="form-control" 
                    placeholder="Create a password"
                    />
                    <span 
                    className="input-group-text bg-white"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                    >
                    {showPassword ? 
                        <VisibilityOffTwoToneIcon className="text-muted" /> : 
                        <VisibilityTwoToneIcon className="text-muted" />
                    }
                    </span>
                </div>
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div className="input-group">
                    <span className="input-group-text bg-white">
                    <LockOutlineTwoToneIcon className="text-muted" />
                    </span>
                    <input 
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    className="form-control" 
                    placeholder="Create a password"
                    />
                    <span 
                    className="input-group-text bg-white"
                    onClick={toggleConfirmPasswordVisibility}
                    style={{ cursor: 'pointer' }}
                    >
                    {showConfirmPassword ? 
                        <VisibilityOffTwoToneIcon className="text-muted" /> : 
                        <VisibilityTwoToneIcon className="text-muted" />
                    }
                    </span>
                </div>
            </div>

            {/* Create Account Button */}
            <div className="text-center mb-3">
                <button type="submit" className="btn btn-success text-white w-100">
                    Create Account
                </button>
            </div>

            {/* Already have an account */}
            <div className="text-center mb-2">
                <p className="mb-0">
                    Already have an account?{' '}
                    <a 
                    href="#" 
                    className="text-decoration-none"
                    >
                    Login
                    </a>
                </p>
            </div>

            {/* Terms and Privacy */}
            <div className="text-center">
                <p className="text-muted mb-0" style={{ fontSize: '0.85rem' }}>
                    By signing up, you agree to our terms of service and privacy policy
                </p>
            </div>
      </form>
    </div>
  );
};

export default TraderSignUpForm