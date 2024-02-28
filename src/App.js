import BlogDetails from './components/BlogDetailsComp';
import Create from './pages/CreateBlogPage';
import Home from './pages/HomePage';
import Nav from './components/NavbarComp';
import NotFound from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import useToken from './components/useToken';
import { useState } from 'react';

function App() {
  const {token, setToken} = useToken();
  //const [newToken, setNewToken] = useState();

  return (
      <Router>
        <div className="App">
              <Nav/>
              <div className="content">
                <Switch>
                  <Route exact path='/login'>
                  {token ? <Home/> : <LoginPage setToken={setToken} />}
                  </Route>
                  <Route exact path='/signup'>
                  {token ? <Home/> : <SignupPage setToken={setToken} />}
                  </Route>
                  <Route exact path='/'>
                  {token ? <Home/> : <LoginPage setToken={setToken} />}
                  </Route>
                  <Route exact path='/profile'>
                    <ProfilePage/>
                  </Route>
                  <Route exact path='/create'>
                    {token ? <Create/> : <LoginPage setToken={setToken} />}
                  </Route>
                  <Route path='/blogs/:id'>
                    <BlogDetails/>
                  </Route>
                  <Route path='*'>
                  {/* '*' means any other route */}
                    <NotFound/>
                  </Route>
                </Switch>
              </div>
            </div>
      </Router>
  );
}

export default App;
