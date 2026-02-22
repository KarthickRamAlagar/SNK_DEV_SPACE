import { useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isLoaded, isSignedIn, user } = useUser();
  const { pathname } = useLocation();

  if (!isLoaded) return null;
  if (!isSignedIn) return <Navigate to="/" />;

  if (user && !user.unsafeMetadata?.role && pathname !== "/") {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
