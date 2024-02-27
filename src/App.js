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
import InvoicePage from "./pages/InvoicePage";
import Quotation from "./pages/Quotation";
import QuotaionList from "./pages/QuotaionList";
import InvoiceList from "./pages/InvoiceList";
function App(authenticate) {
  const userData = authenticate;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<RootLayout />}>
          {userData ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/invoice-list" element={<InvoiceList />} />
              <Route path="/invoice-form" element={<InvoicePage />} />
              <Route path="/quotation-form" element={<Quotation />} />
              <Route path="/quotaion-list" element={<QuotaionList />} />
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
