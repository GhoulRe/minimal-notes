import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter } from 'react-router-dom';
import { NoteProvider } from './context/note.context';
import { UserCredentialsProvider } from './context/usercredentials .context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserCredentialsProvider>
        <NoteProvider>
          <App />
        </NoteProvider>
      </UserCredentialsProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
