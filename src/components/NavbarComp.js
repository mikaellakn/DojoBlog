import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
  const userName = useSelector((state) => state.user.user_name);

  return ( 
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
      </div>

      {userName && 
      <Link to='/profile'>
        <div className='user-account'>
          <p>{userName}</p>
        </div>
      </Link>}

    </nav>
   );
}
 
export default Nav;