import { createContext, useState,useEffect } from "react";
import {onAuthStateChangedListener} from '../utils/firebase.utils';

export const UserCredentials = createContext({
   UserCredential:null,
   setUserCredentials:()=>{}
});

export const UserCredentialsProvider = ({children})=>{
    const [UserCredential,setUserCredentials] = useState(null);

    const value = {UserCredential,setUserCredentials};

  

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user)=>{
           setUserCredentials(user);
        });
        return unsubscribe;
    }, [])
    
    return(
        <UserCredentials.Provider value={value}>{children}</UserCredentials.Provider>
    )
  
}