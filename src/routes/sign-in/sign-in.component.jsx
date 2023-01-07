import { useState } from "react";
import {signInUserWithEmailAndPassword} from '../../utils/firebase.utils';
import { useContext } from "react";
import {UserCredentials} from '../../context/usercredentials .context';
import './sign-in.styles.scss';

const SignIn = () => {
  const [email,setEmail] = useState('');
  const [password,SetPassword] = useState('');
  const emailpass = {email,password};
  const {UserCredential} = useContext(UserCredentials);

  const handleSubmit = (e)=>{
    e.preventDefault();
    signInUserWithEmailAndPassword(emailpass.email,emailpass.password);
    console.log(emailpass);
  }

  return (
  <div className="sign-in-div">
    {UserCredential ? null : (
    <form className="sign-in-form" onSubmit={handleSubmit}>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e)=> SetPassword(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
      )
      }
  </div>
   
      )
}

export default SignIn;