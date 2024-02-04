import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/auth/Dashboard";
import AuthLayout from "./pages/auth/AuthLayout";
import Account from "./pages/auth/Account";
import PrivateRoute from "./components/PrivateRoute";
import "./stylesheets/main.scss";

function App() {
  const userData = {
    isAuthenticated: true,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          element={<PrivateRoute redirectPath="/login" userData={userData} />}
        >
          <Route element={<AuthLayout />}>
            <Route path="/dashboard">
              <Route index element={<Dashboard />} />
              <Route path="account" element={<Account />} />
            </Route>
            <Route path="account" element={<Account />} />
          </Route>
        </Route>
        {/* <Route from="/" to="/dashboard" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
