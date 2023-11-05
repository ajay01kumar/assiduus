import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import "./layout.css";
import * as React from "react";
import logo from "../../images/Assiduus_TM_Logo--1-.png";
import user from "../../images/sachin-tendulkar.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Headers = () => {
  return (
    <>
      <Grid container spacing={2} className="header">
        <Grid item sm={2}>
          <Box className="sub_heading">
            <img
              src={logo}
              alt="logo"
              style={{
                marginLeft: "2vw",
                aspectRatio: 14 / 3.4,
                height: "7vh",
              }}
            />
          </Box>
        </Grid>
        <Grid sm align="right">
          <Box className="header_tools">
            <div>
              {" "}
              <TextField
                id="search"
                type="search"
                // label="Search"
                // value={searchTerm}
                // onChange={handleChange}
                sx={{
                  width: "95%",
                  backgroundColor: "#eaecee;",
                  "& .MuiInputBase-root": {
                    height: "4.5vh",
                  },
                }}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ marginLeft: "-15px" }} />
                    </InputAdornment>
                  ),
                }}
              />{" "}
            </div>
            <div style={{ margin: "1vw", marginTop: "-2%" }} className="sub_heading">
              <NotificationsIcon />
              <div className="dotSet">
                <FiberManualRecordIcon 
                // className="fiber_manual"
                  sx={{
                    color: "#47B747",

                    padding: "0px",
                    height: "2.2vh",
                    width: "2.2vh",
                    margin: "0px",
                    backgroundColor: "white",

                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <div style={{ margin: "1vw" }}>
              <img src={user} alt="img" className="user_image" />{" "}
            </div>
            <div style={{ margin: "0.1vw" }}>
              <ArrowDropDownIcon sx={{ height: "1.2em", width: "1.2em" }} />
            </div>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Headers;
