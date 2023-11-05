import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";
import "./dashboard.css";
import Chart1 from "./charts/Chart1";
import Chart2 from "./charts/Chart2";
import Chart3 from "./charts/Chart3";
import Chart4 from "./charts/Chart4";

const Dashboard = () => {
  return (
    <Box sx={{ p: 2 }}>
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={6}>
            <Chart1 />
          </Grid>
          <Grid item sm={6}>
            <Chart2 />
          </Grid>{" "}
          <Grid item sm={6}>
            <Chart3 />
          </Grid>
          <Grid item sm={6}>
            <Chart4 />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
