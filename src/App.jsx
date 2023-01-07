import './App.css';
import {Routes,Route} from 'react-router-dom';

import Navbar from './routes/navbar/navbar.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';
import ShowNotes from './components/shownotes/shownotes.component';
import { useState,useEffect } from 'react';
import { useContext } from 'react';
import { UserCredentials } from './context/usercredentials .context';
import { getTodos, onAuthStateChangedListener } from './utils/firebase.utils';
import { NoteContext } from './context/note.context';

import { onValue,ref } from 'firebase/database';
import { firedb } from './utils/firebase.utils';
import { useNavigate } from 'react-router-dom';

function App() {
  const {UserCredential}= useContext(UserCredentials);
  const {noteData,setNoteData} = useContext(NoteContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(UserCredential === null){
      return navigate("/sign-up");
    }
  }, [UserCredential])
  

  useState(()=>{
   
    //firebase in app.jsx 
    onAuthStateChangedListener((user)=>{
      if(user){
        onValue(ref(firedb,`/${user.uid}`),(snapshot)=>{
          setNoteData([]);
          const data =  snapshot.val();
          if(data !== null){
            Object.values(data).map((todo)=>{
              setNoteData((prev)=>[...prev,todo]);
            })
          }
          // noteData !== null && console.log('done getting data');
          // noteData !== null && console.log('noteData',noteData);
          return data;
        })
      }
    })
  
  },[])


  return (
    <div className="App">
    <Routes>
     <Route path='/' element={<Navbar/>}>
     <Route path='sign-in' element={<SignIn/>}/>
     <Route path='sign-up' element={<SignUp/>}/>
     </Route>
    </Routes>
    <ShowNotes/>
    </div>
  )
}

export default App
