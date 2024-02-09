import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";

// Layout
import { ContainerLogin } from "../layout/Containerlogin";

// Screens
import { Login } from "../screens/Login";

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
            <h2>SignIn</h2>
          </ContainerLogin>
        }
      />

      <Route path="/" element={<PrivateRoute />} />
    </Routes>
  );
}
