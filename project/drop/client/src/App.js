import './App.css';
import MainPage from './components/MainPage';
import AboutUs from "./components/AboutUs"
import Login from "./components/Login"
import Register from './components/Register';
import CalendarApp from './components/Calendar/CalendarApp'
import ErrorPage from './components/ErrorPage';
import HelpPage from './components/HelpPage';
import MoodChartApp from './components/MoodChart/MoodChartApp'
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
            <MainPage />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/aboutUs">
            <AboutUs />
          </Route>

          <Route path="/calendar">
            <CalendarApp />
          </Route>

          <Route path="/help">
            <HelpPage />
          </Route>

          <Route path="/moodchart">
            <MoodChartApp />
          </Route>

          <Route path="/error">
            <ErrorPage />
          </Route>

          <Route path="*" >
            <Redirect to="/Error" />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;