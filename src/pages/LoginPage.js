import '../styles/login.css';
import { loginUser,signupUser, userExists } from '../services/UsersSurface';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUserName } from '../features/counter/userSlice';

const LoginPage = ({setToken}) => {
  const [alert, setAlert] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  
  const handleSubmit = async e => {
    e.preventDefault();

    const token = await loginUser({
      username,
      password
    })

    if(token){
      dispatch(setUserName(username));
      setToken(token);
    }else{
      setAlert(true);
    }
  }

  return ( 
    <div className="login-wrapper">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <input placeholder="username" type="text" onChange={e => setUsername(e.target.value)} />
        </div>
        <div className='form-field'>
          <input placeholder="password" type="text"  onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className='btn-container'><button className='submit-btn' type="submit">Login</button></div>
      </form>
      {alert && <h2 className='sign-up-alert'>Please sign up</h2>}
      <div className='email-help'>
        <p>Not registered? </p>
        <div className="link">
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
   );
}
 
export default LoginPage;