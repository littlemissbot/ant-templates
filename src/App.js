import { Routes, Route } from "react-router-dom";

import AuthLayout from "./views/auth";
import PrivateLayout from "./views/private";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/private/Dashboard";
import Users from "./views/private/Users";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route
          path=""
          element={<Login />}
        />
        <Route
          path="register"
          element={<Register />}
        />
      </Route>
      <Route path="app" element={<PrivateLayout />}>
        <Route
          path=""
          element={<Dashboard />}
        />
        <Route
          path="users"
          element={<Users />}
        />
      </Route>
    </Routes>
    </>
  );
}

export default App;
