import React, { createContext, useEffect, useState } from "react";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth(app);

    const googleProvider = new GoogleAuthProvider();

    // Create user with email and password

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //User login with Email and password
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Update User Info
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    };

    // Login user with google account
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // Logout
    const logOut = () => {
        return signOut(auth);
    };

    // Use onAuthStete
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);
    const authInfo = {
        loading,
        user,
        createUser,
        updateUser,
        googleLogin,
        userLogin,
        logOut,
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;
