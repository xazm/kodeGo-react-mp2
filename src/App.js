import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
// import PrivateRoute from "./components/PrivateRoute";
import RootLayout from "./global/RootLayout";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import InvoicePage from "./pages/InvoicePage";
import Quotation from "./pages/Quotation";
function App(authenticate) {
  const userData = authenticate;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<RootLayout />}>
          {userData ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/invoice-form" element={<InvoicePage />} />
              <Route path="/quotation-form" element={<Quotation />} />
            </>
          ) : (
            <Navigate to="/login" />
          )}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
