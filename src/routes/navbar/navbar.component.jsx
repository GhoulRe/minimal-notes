import './navbar.styles.scss';
import { AiOutlineMenu } from 'react-icons/ai'

import React, { useState } from 'react'
import { Outlet,Link } from 'react-router-dom';
import { UserCredentials } from '../../context/usercredentials .context';
import { useContext } from 'react';
import { signOutUser } from '../../utils/firebase.utils';

import CreateNoteModal from '../../components/notemodal/create-modal.component';

const Navbar = () => {
  const {UserCredential} = useContext(UserCredentials);
  const [resC,setResC] = useState(false);

  const handleSignOut = ()=>{
    signOutUser();
    window.location.reload(false);
 }

 const res = ()=>{
   setResC(!resC); 
}
  return (
    <>
      <nav className="main-nav">
        <div className='nav-fchild'>
        <Link to='/'>SelfNote</Link>
        </div>
        <div className='nav-schild'>
          <AiOutlineMenu onClick={()=>res()} className='nav-icon' />
          {resC && (<div className='miniRes'>
            <ul className='miniUl'>
          {UserCredential && (<li>{`${UserCredential.email}`}</li>)}
            <li><CreateNoteModal/></li>
            {UserCredential === null && ( <>
              <Link to='/sign-in'><li><button className='btn btn-primary'>Sign-in</button></li></Link>
              <Link to='/sign-up'><li><button className='btn btn-primary'>Sign-up</button></li></Link>
              </>)}

              {UserCredential && (<button className='btn btn-primary' onClick={handleSignOut}>Sign-out</button>)}
          </ul>
          </div>)}
          {/* make responsive view */}
          <ul className='nav-schild1'>
          {UserCredential && (<li>{`${UserCredential.email}`}</li>)}
            <li><CreateNoteModal/></li>
            {UserCredential === null && ( <>
              <Link to='/sign-in'><li><button className='btn btn-primary'>Sign-in</button></li></Link>
              <Link to='/sign-up'><li><button className='btn btn-primary'>Sign-up</button></li></Link>
              </>)}

              {UserCredential && (<button className='btn btn-primary' onClick={handleSignOut}>Sign-out</button>)}
          </ul>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar;














