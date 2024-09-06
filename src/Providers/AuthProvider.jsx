import { createContext, useEffect, useState } from 'react';
import { getAuth,updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // singin with google
    const loginWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // update profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            
            if(currentUser?.email){
                setLoading(false)
            }

            console.log("current user --->", currentUser);
        });

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        createUser,
        loginUser,
        updateUserProfile,
        loginWithGoogle,
        user,
        loading,
        setLoading
    }

    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;