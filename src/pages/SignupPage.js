import '../styles/login.css';
import { useState, useEffect } from 'react';
import { loginUser, signupUser, userExists } from '../services/UsersSurface';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserName } from '../features/counter/userSlice';

const SignupPage = ({setToken}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setToken(token);
  //   }
  // });

  const handleSubmit = async e =>{
    // debugger waits till function returns response
    e.preventDefault();

    const token = await signupUser({
      username,
      password
    })

    if(token){
      dispatch(setUserName(username));
      setToken(token);
    }
  }

  return ( 
    <div className="login-wrapper">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <input placeholder='username' type="text" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className='form-field'>
          <input placeholder='password' type="text"  onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className='btn-container'><button className='submit-btn' type="submit">Sign up</button></div>
      </form>
      <div className='email-help'>
        <p>Already have an account? </p>
        <Link to="/login">Log in</Link>
      </div>
    </div>
   );
}
 
export default SignupPage;