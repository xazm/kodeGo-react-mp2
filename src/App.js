import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="container-fluid position-relative d-flex p-0 bg-dark ">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
