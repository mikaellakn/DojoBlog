import '../styles/login.css';
import { useEffect, useState } from 'react';
import { loginUser,signupUser, userExists } from '../services/login';
import { Link } from 'react-router-dom';

const LoginPage = ({setToken}) => {
  const [alert, setAlert] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     setToken(token);
  //   }
  // });
  
  const handleSubmit = async e => {
    e.preventDefault();

    if(userExists(username)){
      const token = await loginUser({
        username,
        password
      });

      setToken(token);
      localStorage.setItem('token', token);
    }
    else{
      setAlert(true);
    }
  }

  return ( 
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="text"  onChange={e => setPassword(e.target.value)}/>
        </label>
        <div><button type="submit">Log In</button></div>
      </form>
      {alert && <h2>Please sign up</h2>}
      <div>
        <p>don't have an account?</p>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
   );
}
 
export default LoginPage;