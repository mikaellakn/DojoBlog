import BlogDetails from './components/BlogDetailsComp';
import Create from './pages/CreateBlogPage';
import Home from './pages/HomePage';
import Nav from './components/NavbarComp';
import NotFound from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useState } from 'react';
import { UserProvider } from './components/UserInfo';
import {configureStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

function App() {
  const [token, setToken] = useState();
  const [newToken, setNewToken] = useState();


  return (
      <Router>
        <UserProvider>
          <div className="App">
            <Nav/>
            <div className="content">
              <Switch>
                {/* the switch component makes sure
                only one route is showing at a time,
                it makes the route start its search
                from top to bottom looking for the first match */}
                <Route exact path='/login'>
                {token ? <Home/> : <LoginPage setToken={setToken} />}
                </Route>
                {/* <Route exact path='/signup'>
                  <SignupPage/>
                </Route> */}
                <Route exact path='/signup'>
                {newToken ? <Home/> : <SignupPage setNewToken={setNewToken} />}
                </Route>
                <Route exact path='/'>
                {token ? <Home/> : <LoginPage setToken={setToken} />}
                </Route>
                <Route exact path='/profile'>
                  <ProfilePage/>
                </Route>
                <Route exact path='/create'>
                  {(token || newToken) ? <Create/> : <LoginPage setToken={setToken} />}
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
        </UserProvider>
      </Router>
  );
}

export default App;