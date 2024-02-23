import '../styles/login.css';
import { useState, useEffect } from 'react';
import { loginUser, signupUser, userExists } from '../services/login';
import { Link } from 'react-router-dom';

const SignupPage = ({setNewToken}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setToken(token);
  //   }
  // });

  const handleSubmit = async e =>{
    e.preventDefault();

    const token = await signupUser({
      username,
      password
    });
    
    console.log(token);

    setNewToken(token);
    localStorage.setItem('newToken', token);
  }

  return ( 
    <div className="login-wrapper">
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="text"  onChange={e => setPassword(e.target.value)}/>
        </label>
        <div><button type="submit">Sign up</button></div>
      </form>
      <div>
        <p>have an account?</p>
        <Link to="/login">Log in</Link>
      </div>
    </div>
   );
}
 
export default SignupPage;