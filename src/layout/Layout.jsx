import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/Auth/LoginForm";
import TraderSignUpForm from "../components/Auth/TraderSignUpForm";
import BuyerSignUpForm from "../components/Auth/BuyerSignUpForm";

const Layout = ({children}) => {
  const {isAuthOpen, closeAuthModal, modalType} = useAuth();
  
  //Creating a Dynamic header based on modal type
  const getModalHeader = () =>{
    switch(modalType){
      case 'login':
        return {
          title: 'Welcome Back',
          subtitle: 'Login to your Noja account'
        };
      case 'buyerSignup':
        return{
          title: 'Buyer Sign Up',
          subtitle: 'Join the Noja community and start saving today!'
        };
      case 'traderSignup':
        return{
          title: 'Trader Sign up',
          subtitle: 'Create your trader account and reach more customers!'
        };
      default:
        return {
          title: 'Welcome Back',
          subtitle: 'Get Started with Noja'
        };
      }
  };

  const header = getModalHeader();

  return (
    <div>
        {children}
        {/* Modal implementation, utilizing isAuthOpen and closeAuthModal */}
        {isAuthOpen && (
          <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{background:"rgba(0,0,0,0.5)", zIndex:9999}}
          onClick={closeAuthModal}
          >
            <div
            className="bg-white p-4 rounded shadow"
            style={{maxWidth: '400px', width: '90%', maxHeight:'80vh', overflowY:'auto', scrollBehavior: 'smooth', }}
            onClick={(e)=> e.stopPropagation()}
            >
              <button className="btn-close float-end"
              onClick={closeAuthModal}>
              </button>

              <div className="text-center mb-4">
                <h3 className="fw-bold">{header.title}</h3>
                <p className="text-muted">{header.subtitle}</p>
              </div>
              {/*Forms*/}
              {modalType === 'login' && <LoginForm/>}
              {modalType === 'buyerSignup' && <BuyerSignUpForm/>}
              {modalType === 'traderSignup' && <TraderSignUpForm/>}
            </div>
          </div>
        )}
    </div>
  )
}

export default Layout;