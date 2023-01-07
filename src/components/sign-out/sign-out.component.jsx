import './sign-out.styles.scss';
import React from 'react';
import { signOutUser } from '../../utils/firebase.utils';
import { useContext } from 'react';
import { UserCredentials } from '../../context/usercredentials .context';


const SignOut = () => {

  const {UserCredential,setUserCredentials} = useContext(UserCredentials);

  // const handleSignOut = ()=>{
  //    signOutUser();
  //    window.location.reload(false);
  // }
  return (
    <></>
    // <div className=' sign-out-page container-fluid'>
    //   <span>{`You are now Logged-In as ${UserCredential.email}`}</span>
    //   {/* <button className='btn btn-primary' onClick={handleSignOut}>Sign-out</button> */}
    // </div>
  )
}

export default SignOut;