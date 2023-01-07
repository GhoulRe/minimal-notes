
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, onValue, remove} from 'firebase/database';
import {uid} from 'uid';
import {set,ref} from 'firebase/database';





const firebaseConfig = {
  apiKey: "AIzaSyAnbsK7VT9mYby85qluZdf2UYvbaMWdG8g",
  authDomain: "selfnote-cd7ef.firebaseapp.com",
  databaseURL: "https://selfnote-cd7ef-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "selfnote-cd7ef",
  storageBucket: "selfnote-cd7ef.appspot.com",
  messagingSenderId: "776506734638",
  appId: "1:776506734638:web:a636f603686896b49607bf"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export const firedb = getDatabase(app);

const auth = getAuth();


export const createAuthuserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    try {
      return await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
      if(error.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
        return alert('password should at least 6 characters long')
      }
    }
  }
  
  export const  onAuthStateChangedListener = (callback)=>{
      onAuthStateChanged(auth,callback);
  }

  export const signInUserWithEmailAndPassword = async(email,password)=>{
    if (!email || !password) return;  
    try {
      return await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
      if(error.message === "Firebase: Error (auth/wrong-password)."){
        alert("Please check your email or password !")
      }else if(error.message === "Firebase: Error (auth/user-not-found)."){
        alert("User not found!")
      } else{
        alert("try again later!")
      }
      
    }
    
  }

  export const signOutUser = async()=>{
       return await signOut(auth); 
  }

  export const writeToDatabase = async(user,todo)=>{
    try {
      const date = new Date();
      const dateS = date.toString()
      const uidd = uid();
      await set(ref(db,`/${user.uid}/${uidd}`),{
       todo:{...todo,dateS},
       uidd:uidd,
      });
    } catch (error) {
      console.log('reatime-error',error.message)
    }
   
  }

  export const getTodos = async(user)=>{
    try {
      onValue(ref(db,`/${user.uid}`),async(snapshot)=>{
        const data = await snapshot.val();
        console.log('done getting data')
        console.log(data)
        return data;
      })
    } catch (error) {
      console.log(error.message);
    }
    
  }

  export const deleteTodo =async(user,uidd)=>{
      await remove(ref(db,`/${user.uid}/${uidd}`))
      
  }
