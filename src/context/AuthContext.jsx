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

    const openAuthModal = () => setIsAuthOpen(true);
    const closeAuthModal = () => setIsAuthOpen(false);
    // Provide the state and functions to the context consumers
    return (
        <AuthContext.Provider value={{isAuthOpen, openAuthModal, closeAuthModal}}>
            {children}
        </AuthContext.Provider>
    );
};