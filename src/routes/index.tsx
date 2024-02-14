import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";

// Layout
import { ContainerAuthentication } from "../layout/ContainerAuthentication";

// Screens
import { Login } from "../screens/Login";
import { SignUp } from "../screens/SignUp";

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ContainerAuthentication>
            <Login />
          </ContainerAuthentication>
        }
      />
      <Route
        path="/signup"
        element={
          <ContainerAuthentication>
            <SignUp />
          </ContainerAuthentication>
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
