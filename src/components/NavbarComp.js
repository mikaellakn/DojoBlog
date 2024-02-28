import { Link } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './UserInfo';

const Nav = () => {
  const {name} = useContext(UserContext);

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
          <p>{name}</p>
        </div>
      </Link>}

    </nav>
   );
}
 
export default Nav;