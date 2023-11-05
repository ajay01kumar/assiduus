import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Headers from "./Headers";
import Dashboard from "../elements/Dashboard";
import Accounts from "../elements/Accounts";
import "./layout.css";
import Sidebar from "./Sidebar";
import Payroll from "../elements/Payroll";
import Advisior from "../elements/Advisior";
import Reports from "../elements/Reports";
import Contacts from "../elements/Contact";
const LayOut = () => {
  return (
    <>
      <BrowserRouter>
        <Box className="header_section">
          <Headers />
        </Box>
        <Box className="siderbar_body">
          <Box className="sidebar">
            <Sidebar />
          </Box>
          <Box className="main_section">
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/accounts" element={<Dashboard />} />
                <Route path="/payroll" element={<Dashboard />} />{" "}
                <Route path="/reports" element={<Dashboard />} />{" "}
                <Route path="/advisor" element={<Dashboard />} />{" "}
                <Route path="/contacts" element={<Dashboard />} />
              </Routes>
            </main>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
};

export default LayOut;
