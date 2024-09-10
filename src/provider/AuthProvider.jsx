import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add a loading state to handle async operations

  // Create a new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in a user
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign out the user
  const logout = () => {
    return signOut(auth);
  };

  // Listen for auth state changes and update the user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user when auth state changes
      setLoading(false); // Set loading to false once user state is updated
      console.log("Auth state changed, current user:", currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signIn,
    logout, // Provide the logout function
    loading, // Add loading to track the state
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children} {/* Render children only when not loading */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
