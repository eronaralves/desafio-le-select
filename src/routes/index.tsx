import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";

// Layout
import { ContainerLogin } from "../layout/Containerlogin";

// Screens
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ContainerLogin>
            <Login />
          </ContainerLogin>
        }
      />
      <Route
        path="/signin"
        element={
          <ContainerLogin>
            <SignUp />
          </ContainerLogin>
        }
      />

      <Route path="/" element={<PrivateRoute />} />
    </Routes>
  );
}
