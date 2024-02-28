import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './UserInfo';
import { useSelector } from 'react-redux';

const Nav = () => {
  const {name} = useContext(UserContext);
  const userName = useSelector((state) => state.user.user_name);

  return ( 
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
      </div>

      {name && 
      <Link to='/profile'>
        <div className='user-account'>
          <p>{userName}</p>
        </div>
      </Link>}

    </nav>
   );
}
 
export default Nav;