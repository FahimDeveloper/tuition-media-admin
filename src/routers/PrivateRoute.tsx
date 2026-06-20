import type { ReactNode } from "react";
import { useAppSelector } from "../hooks/useAppHooks";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  email: string;
  role: string;
};

const PrivetRoute = ({
  children,
  role,
}: {
  children: ReactNode;
  role: string;
}) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  if (!accessToken) {
    return <Navigate to="/" replace />;
  }

  try {
    const decoded = jwtDecode<JwtPayload>(accessToken);

    if (decoded.role !== role) {
      return <Navigate to="/" replace />;
    }

    return children;
  } catch (error) {
    return <Navigate to="/" replace />;
  }
};

export default PrivetRoute;
