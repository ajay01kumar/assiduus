import {
  Box,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import ContactsIcon from "@mui/icons-material/Contacts";

const Sidebar = () => {
  return (
    <>
      {" "}
      <List aria-labelledby="nested-list-subheader">
        <Box>
          <NavLink to="/" className="link" activeClassName="active">
            <DashboardIcon className="icon" />{" "}
            <Typography>Dashboard</Typography>
          </NavLink>
          <NavLink to="/accounts" className="link" activeClassName="active">
            <AccountBalanceWalletIcon className="icon" />{" "}
            <Typography>Accounts</Typography>
          </NavLink>
          <NavLink to="/payroll" className="link" activeClassName="active">
            <AttachMoneyIcon className="icon" />{" "}
            <Typography>Payroll</Typography>
          </NavLink>
          <NavLink to="/reports" className="link" activeClassName="active">
            <DescriptionIcon className="icon" />
            <Typography>Reports</Typography>
          </NavLink>
          <NavLink to="/advisor" className="link" activeClassName="active">
            <PersonIcon className="icon" /> <Typography>Advisior</Typography>
          </NavLink>
          <NavLink to="/contacts" className="link" activeClassName="active">
            <ContactsIcon className="icon" />
            <Typography>Contacts</Typography>
          </NavLink>
        </Box>
      </List>
    </>
  );
};

export default Sidebar;
