import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import { NavLink } from "react-router-dom";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import logo from "../../assets/images/logo-color.png";
import useAuth from "./../../hooks/useAuth";
import AdminRoute from "./../AdminRoute/AdminRoute";
import ManageBlogs from "./../Admin/ManageBlogs/ManageBlogs";
import MakeAdmin from "./../Admin/MakeAdmin/MakeAdmin";
import AddBlog from "../Admin/AddBlog/AddBlog";
import AddExperience from "../User/AddExperience/AddExperience";
import MyBlog from "../User/MyBlog/MyBlog";
import DashboardHome from "./DashboardHome";
import WriteBlog from "./../User/WriteBlog/WriteBlog";
const drawerWidth = 200;

const Dashboard = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { allContext } = useAuth();
  const { isAdmi, logOut } = allContext;
  //const { email } = user;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <img src={logo} className="img-fluid" alt="" />

      <List>
        {!isAdmi && (
          <NavLink
            to={`${url}/myBlogs`}
            style={{
              textDecoration: "none",
              fontSize: "20px",
              color: "black",
            }}
          >
            <li className="mt-3 ps-3 dashboard-menu">
              <i class="fab fa-blogger me-2"></i>My Blogs
            </li>
          </NavLink>
        )}
        {!isAdmi && (
          <NavLink
            to={`${url}/writeBlog`}
            style={{
              textDecoration: "none",
              fontSize: "20px",
              color: "black",
            }}
          >
            <li className="mt-4 ps-3 dashboard-menu">
              <i className="fas fa-feather me-2"></i>Write Blog
            </li>
          </NavLink>
        )}

        {isAdmi && (
          <Box>
            <NavLink
              to={`${url}/makeAdmin`}
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "black",
              }}
            >
              <li
                className="mt-3 ps-3 dashboard-menu"
                style={{ te: "none", color: "black" }}
              >
                Make Admin
              </li>
            </NavLink>
            <NavLink
              to={`${url}/addBlog`}
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "black",
              }}
            >
              <li className="mt-3 ps-3 dashboard-menu">Add Blogs</li>
            </NavLink>

            <NavLink
              to={`${url}/manageBlogs`}
              style={{
                textDecoration: "none",
                fontSize: "20px",
                color: "black",
              }}
            >
              <li className="mt-3 ps-3 dashboard-menu">Manage All Blogs</li>
            </NavLink>
          </Box>
        )}
        <div className="text-center">
          <button
            onClick={logOut}
            style={{ backgroundColor: "#00BCD9", marginTop: "15px" }}
            className="border-0 btn btn-primary fw-bolder"
          >
            Log Out
          </button>
          <br />
          <button
            style={{
              backgroundColor: "#00BCD9",
              marginTop: "20px",
            }}
            className="border-0 btn btn-primary fw-bolder"
          >
            <Link
              className="text-white p-2"
              to="/home"
              style={{ textDecoration: "none" }}
            >
              Home
            </Link>
          </button>
        </div>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "#00BCD9" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography variant="h4" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/myBlogs`}>
            <WriteBlog></WriteBlog>
          </Route>
          <Route exact path={`${path}/writeBlog`}>
            <MyBlog></MyBlog>
          </Route>
          <AdminRoute exact path={`${path}/manageBlogs`}>
            <ManageBlogs></ManageBlogs>
          </AdminRoute>

          <AdminRoute exact path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute exact path={`${path}/addBlog`}>
            <AddBlog></AddBlog>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
};

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
