import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import DashboardHome from "./Dashboard/Dashboard/DashboardHome";
import WriteBlog from "./Dashboard/User/WriteBlog/WriteBlog";
import MyBlog from "./Dashboard/User/MyBlog/MyBlog";
import AdminRoute from "./Dashboard/AdminRoute/AdminRoute";
import ManageBlogs from "./Dashboard/Admin/ManageBlogs/ManageBlogs";
import MakeAdmin from "./Dashboard/Admin/MakeAdmin/MakeAdmin";
import AddBlog from "./Dashboard/Admin/AddBlog/AddBlog";

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
        {/* scroll bar end */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/categoryBlogs" element={<CategoryBlogs />}></Route>

            <Route
              path="/details/:id"
              element={
                <PrivateRoute>
                  <Details />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route
                exact
                path="/Dashboard"
                element={<DashboardHome />}
              ></Route>
              <Route
                path={`/Dashboard/myBlogs`}
                element={<WriteBlog />}
              ></Route>
              <Route path={`/Dashboard/writeBlog`} element={<MyBlog />}></Route>
              <Route
                path={`/Dashboard/manageBlogs`}
                element={
                  <AdminRoute>
                    <ManageBlogs></ManageBlogs>
                  </AdminRoute>
                }
              ></Route>

              <Route
                path={`/Dashboard/makeAdmin`}
                element={
                  <AdminRoute>
                    <MakeAdmin></MakeAdmin>
                  </AdminRoute>
                }
              ></Route>
              <Route
                path={`/Dashboard/addBlog`}
                element={
                  <AdminRoute>
                    <AddBlog></AddBlog>
                  </AdminRoute>
                }
              ></Route>
            </Route>

            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
