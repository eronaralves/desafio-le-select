import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";

// Layout
import { ContainerLogin } from "../layout/Containerlogin";

// Screens
import { ForwardedLogin } from "../screens/Login";
import { ForwardedSignUp } from "../screens/SignUp";

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ContainerLogin>
            <ForwardedLogin />
          </ContainerLogin>
        }
      />
      <Route
        path="/signup"
        element={
          <ContainerLogin>
            <ForwardedSignUp />
          </ContainerLogin>
        }
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <h1>Home</h1>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
