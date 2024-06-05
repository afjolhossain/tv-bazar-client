/* eslint-disable react/prop-types */
import useAuth from "../../components/Hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import LLoadingSpinner from "../../components/LLoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <LLoadingSpinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
