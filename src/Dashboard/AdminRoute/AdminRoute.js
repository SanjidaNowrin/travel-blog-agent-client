import { Navigate, useLocation } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import useAuth from "./../../hooks/useAuth";

function AdminRoute(props) {
  const { children, ...rest } = props;
  let location = useLocation();
  const { allContext } = useAuth();
  const { user, loading, isAdmi } = allContext;
  if (!isAdmi) {
    return (
      <div className="py-5 my-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  // route
  if (user.displayName && isAdmi) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       user.displayName && isAdmi ? (
  //         children
  //       ) : (
  //         <Redirect
  //           to={{
  //             pathname: "/login",
  //             state: { from: location },
  //           }}
  //         />
  //       )
  //     }
  //   />
  // );
}

export default AdminRoute;
