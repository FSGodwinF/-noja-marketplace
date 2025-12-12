import {createContext, useContext, useState} from 'react';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    // Ensure the hook is used within a provider
    if(!context){
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export const AuthProvider = ({children}) => {
    // State to manage authentication modal visibility
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    // State to manage which type of modal to show
    const [modalType, setModalType] = useState('login'); // 'login', 'buyerSignup', 'traderSignup'

    const openAuthModal = (type = 'login') => {
        setModalType (type);
        setIsAuthOpen(true);
        
    };
    const closeAuthModal = () => setIsAuthOpen(false);
    // Provide the state and functions to the context consumers
    return (
        <AuthContext.Provider value={{
            isAuthOpen, 
            modalType, 
            openAuthModal, 
            closeAuthModal}}>
            {children}
        </AuthContext.Provider>
    );
};