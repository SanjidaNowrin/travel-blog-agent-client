import { useLocation, Navigate } from "react-router-dom";

import { Spinner } from "react-bootstrap";
import useAuth from "./../hooks/useAuth";

function PrivateRoute(props) {
  const { children, ...rest } = props;
  let location = useLocation();
  const { allContext } = useAuth();
  const { user, loading } = allContext;
  if (loading) {
    return (
      <div className="py-5 my-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }
  // route
  if (user.displayName) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
  // return (
  //   <Route
  //     {...rest}
  //     render={({ location }) =>
  //       user.displayName ? (
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

export default PrivateRoute;
