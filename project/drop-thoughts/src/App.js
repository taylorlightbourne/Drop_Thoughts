import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            {/* input route for home page */}
          </Route>

          <Route path="/signup">
            {/* input route for sign up */}
          </Route>

          <Route path="/login">
            {/* input route for login */}
          </Route>
        </Switch>
      </Router>
        
    </div>
  );
}

export default App;