import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Nav = () => {
  let history = useHistory();

  const userName = useSelector((state) => state.user.user_name);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log(isDropdownOpen);
  };

  const logout =() => {
    localStorage.removeItem('token');
    //redirect user to login
    //history.push('/login');
  }

  return ( 
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
      
      </div>

      {userName && 
      <>
      <Link to="/">Home</Link>
      <Link to="/create">New Blog</Link>
      <Link to='/profile'>
        <div className='user-account' onClick={toggleDropdown}>
          <p>{userName}</p>
          {isDropdownOpen && (
            <div className="dropdown">
            <div>
              <Link to="/profile">Edit</Link>
            </div>
            <button onClick = {logout}>Logout</button> 
          </div>
          )}
        </div>
      </Link>
      </>}

    </nav>
   );
}
 
export default Nav;