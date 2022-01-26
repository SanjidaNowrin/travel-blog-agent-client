import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home/Home";
import PrivateRoute from "./Route/PrivateRoute";
import Details from "./Home/Details/Details";
import Dashboard from "./Dashboard/Dashboard/Dashboard";
import NotFound from "./NotFound/NotFound";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/details/:id">
              <Details></Details>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/Dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
