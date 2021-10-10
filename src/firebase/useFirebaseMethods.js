import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

const useFirebaseMethods = () => {
    const [user, setUser] = useState({});
    const [message, setMessage] = useState('');
    const auth = getAuth();

    //Google sign in methods ---------------------------------------------------------------
    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)     
    }

    // special observer for current user get(firebase will track user-------------------------------------------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])

    // sign out ---------------------------------------------------
    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setMessage(error);
            });
    }



    return {
        user,
        message,
        handleGoogleSignIn,
        logout
    }


}

export default useFirebaseMethods;