import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Modal,
  Typography,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 3,
};

const Chart2 = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const data = [100, 130, 20, 50, 80, 75];
  const data = [
    { label: "Older", value: 100 },
    { label: "Jan 01-08", value: 130 },
    { label: "Jan 09-16", value: 100 },
    { label: "Jan 17-24", value: 50 },
    { label: "Jan 25-31", value: 80 },
    { label: "Future", value: 75 },
  ];
  const svgRef = useRef();
  useEffect(() => {
    const w = 400,
      h = 140;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("overflow", "visible");

    const xScale = d3
      .scaleBand()
      .domain(data.map((val) => val.label))
      .range([0, w])
      .padding(0.3);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([h, 0]);


    const xAxis = d3.axisBottom(xScale).ticks(data.length);
    const yAxis = d3.axisLeft(yScale).ticks(5);



    svg
      .append("g")
      .call(xAxis)
      .attr("transform", `translate(0, ${h})`)

    // svg.append("g").call(yAxis);
    // .attr("fill", (d) => colorScale(d.label))

    svg
      .selectAll(".bar")

      .data(data)


      .join("rect")
      .attr("x", (v) => xScale(v.label))
      .attr("y", (d) => yScale(d.value))
      .attr("rx", 10) // Set the horizontal radius for top and bottom corners
      // .attr("ry", )
      // .attr("width", xScale.bandwidth())
      .attr("width", xScale.bandwidth() * 0.6) // Adjust the width (e.g., 80% of the bandwidth)
      .attr("height", (val) => h - yScale(val.value))
      .attr("stroke", "#47B747")
      .attr("fill", "#47B747")
      .attr("font-size", "120px") // Adjust the font size
  }, [data]);
  return (
    <>
      <Card className="item">
        <CardActions>
          <Grid container className="crdHead">
            <Grid item sm>
              <Typography className="sub_heading">Invoices vowed to you</Typography>
            </Grid>
            <Grid
              item
              sm={4}
              className="sub_heading"
              sx={{ justifyContent: "flex-end !important" }}
            >
              <Button
                size="small"
                align="right"
                className="btnCss"
                variant="contained"
                onClick={() => handleOpen()}
              >
                New Sales Invoice
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginTop: "-5%",
                    }}
                  >
                    <CloseIcon
                      onClick={() => handleClose()}
                    />
                  </div>
                  <input type="file" id="file1" name="upload"></input>
                </Box>
              </Modal>
            </Grid>
          </Grid>
        </CardActions>

        <CardContent>
          <Box align="center">
            <svg ref={svgRef}></svg>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Chart2;
