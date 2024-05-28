import {
    GithubAuthProvider,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);


const googleProvider = new GoogleAuthProvider();
const githubLogin = new GithubAuthProvider();


const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);
    
    const userCreate = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const userSign = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const singInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const singInWithGithub = () =>{
        return signInWithPopup(auth, githubLogin);
    }

    const logOut = () =>{
        return signOut(auth);
    }

    const updateUser = () =>{
        return updateProfile(user);
    }

    useEffect(()=>{
        const unsubscriber = onAuthStateChanged(auth, (currentUser) =>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }else{
                setUser(null);
                setLoading(false)
            }
        });
        return () =>{
            unsubscriber
        };
    },[]);

    const authInfo = {
        user,
        userSign,
        logOut,
        loading,
        setLoading,
        updateUser,
        userCreate,
        singInWithGoogle,
        singInWithGithub
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
