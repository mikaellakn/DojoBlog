import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Nav from './Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './NotFound';

function App() {
  return (
      <Router>
        <div className="App">
          <Nav/>
          <div className="content">
            <Switch>
              {/* the switch component makes sure 
              only one route is showing at a time,
              it makes the route start its search 
              from top to bottom looking for the first match */}

              <Route exact path='/'>
                <Home/>
              </Route>

              <Route exact path='/create'>
                <Create/>
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