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
import CategoryBlogs from "./Home/Category/CategoryBlogs";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <AuthProvider>
        <ScrollToTop
          style={{ backgroundColor: "#00BCD9" }}
          smooth
          component={
            <p className="text-orange-500 mt-1 text-white">
              <i className="fas fa-angle-double-up fa-lg"></i>
            </p>
          }
        />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/categoryBlogs">
              <CategoryBlogs></CategoryBlogs>
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
