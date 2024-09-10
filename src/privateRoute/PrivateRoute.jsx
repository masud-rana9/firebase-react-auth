import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    <p>Loading......</p>;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" replace={true} />;
};

export default PrivateRoute;
