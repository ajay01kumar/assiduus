import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Chart4 = () => {
  return (
    <Card className="item">
      <CardActions>
        <Grid container className="crdHead">
          <Grid item sm>
            <Typography className="sub_heading">Account watchlist</Typography>
          </Grid>
          <Grid item sm={3} className="sub_heading" align="right"></Grid>
        </Grid>
      </CardActions>

      <CardContent>
        <Box sx={{ fontSize: "0.85em", marginTop: "-2%" }}>
          <Grid container>
            <Grid item sm={6}>
              <Typography sx={{ color: "#ced1d4", fontSize: "1.2em" }}>
                {" "}
                Account
              </Typography>
            </Grid>
            <Grid item sm={3}>
              <Typography sx={{ color: "#ced1d4", fontSize: "1.2em" }}>
                {" "}
                This Month
              </Typography>
            </Grid>
            <Grid item sm={3}>
              {" "}
              <Typography sx={{ color: "#ced1d4", fontSize: "1.2em" }}>
                {" "}
                YTD
              </Typography>
            </Grid>
            <Grid item sm={6}>
              Sales
            </Grid>
            <Grid item sm={3}>
              1,119
            </Grid>
            <Grid item sm={3}>
              11, 456
            </Grid>
            <Grid item sm={6}>
              Advertising
            </Grid>
            <Grid item sm={3}>
              12,455
            </Grid>
            <Grid item sm={3}>
              6, 12, 345
            </Grid>
            <Grid item sm={6}>
              Inventory
            </Grid>
            <Grid item sm={3}>
              4, 34, 123
            </Grid>
            <Grid item sm={3}>
              9, 786
            </Grid>
            <Grid item sm={6}>
              Entertainment
            </Grid>
            <Grid item sm={3}>
              0
            </Grid>
            <Grid item sm={3}>
              0
            </Grid>
            <Grid item sm={6}>
              Product
            </Grid>
            <Grid item sm={3}>
              3,567
            </Grid>
            <Grid item sm={3}>
              2, 563
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Chart4;
