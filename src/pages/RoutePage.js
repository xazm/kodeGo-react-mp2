import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "../global/RootLayout";
import Dashboard from "./Dashboard";
import InvoicePage from "./InvoicePage";

function RoutePage() {
  return (
    <Routes>
      <Route element={RootLayout} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/form/invoice" element={<InvoicePage />} />
    </Routes>
  );
}

export default RoutePage;
