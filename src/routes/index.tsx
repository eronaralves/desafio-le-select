import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";

// Layout
import { ContainerLogin } from "../layout/Containerlogin";

export function AppRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ContainerLogin>
            <h1>Login</h1>
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
