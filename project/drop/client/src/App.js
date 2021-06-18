import './App.css';
import MainPage from './components/MainPage';
import AboutUs from "./components/AboutUs"
import Login from "./components/Login"
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>

          <Route path="/register">
            <Register/>
          </Route>

          <Route path="/login">
            <Login/>
          </Route>

          <Route path="/aboutUs">
            <AboutUs/>
          </Route>

        </Switch>
      </Router>
        
    </div>
  );
}

export default App;