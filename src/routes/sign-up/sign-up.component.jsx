
import { useState } from "react";
import { useContext } from "react";
import { UserCredentials } from "../../context/usercredentials .context";
import { createAuthuserWithEmailAndPassword } from "../../utils/firebase.utils";
import SignOut from "../../components/sign-out/sign-out.component";
import './sign-up.styles.scss';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [ConfirmPassword,setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const {UserCredential,setUserCredentials} = useContext(UserCredentials);

  const userEmailPassword = {
    email,
    password,
    ConfirmPassword
  } 

  const handleUserEmailPass =async(e)=>{
    e.preventDefault();
    if(userEmailPassword.password !== userEmailPassword.ConfirmPassword){
       return alert("password and confirm password does not match !")
    }else if(userEmailPassword.password === "" || userEmailPassword.ConfirmPassword === ""){
        return alert("password or confirm password canot be empty!")
    }else if(userEmailPassword.password.length < 6 || userEmailPassword.ConfirmPassword.length < 6 ){
        return alert("password should be 6 characters long")
    }
    else{
      const {email,password} = userEmailPassword;
      setUserCredentials({...UserCredential,userEmailPassword});
      const {user} = await createAuthuserWithEmailAndPassword(email,password);
      setUserCredentials(user);
      // createUserDocumentWithAuth(user);
      navigate("/");
    }
   
  }

  // console.log(UserCredential);
  // console.log('usercre:',userEmailPassword)
  return (
    <div className="sign-up-form">
    {UserCredential ? (<SignOut />) : (<form onSubmit={handleUserEmailPass}>
        {/* <!-- Email input --> */}
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example3" className="form-control" value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <label className="form-label" htmlFor="form2Example2">
            Confirm Password
          </label>
        </div>
        {/* <!-- Submit button --> */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign up
        </button>
      </form>)}
      
    </div>
  );
};

export default SignUp;
