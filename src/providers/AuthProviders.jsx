import  { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"


export const AuthContext = createContext(null);

const auth =getAuth(app)


  const AuthProviders = ({children}) => {
    const [user, setUser]=useState(null)



    const createUser = (email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email,password)=>{
      return signInWithEmailAndPassword(auth, email,password)
    }

    const logOut = ()=>{
      return signOut(auth)
    }

    useEffect( ()=>{
    const unsubscibe=  onAuthStateChanged(auth, currentUser=>{
        console.log('auth state change', currentUser);
        setUser(currentUser)
      })

      return()=>{
        unsubscibe()
      }

    }, [])

    const authInfo={
      user,
      createUser,
      signIn,
      logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        
       {children}
        
        </AuthContext.Provider>
  )
}

export default AuthProviders