import React, { createContext } from 'react';
import useFirebaseMethods from '../firebase/useFirebaseMethods';


export const authContext = createContext();

const AuthProvider = ({children}) => {

    const allContext = useFirebaseMethods();
    return (
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
    );
};

export  default AuthProvider;