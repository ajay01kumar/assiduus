import React, { useEffect, useRef } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import * as d3 from "d3";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending,
} from "d3";

const Chart3 = () => {


  const data = [
    {
      label: "August",
      "Tea": 40,
      "Coffee": 20,
    },
    {
      label: "September",
      "Tea": 50,
      "Coffee": 60,
    },
    {
      label: "October",
      "Tea": 60,
      "Coffee": 75,
    },
    {
      label: "December",
      "Tea": 40,
      "Coffee": 60,
    },
    {
      label: "December",
      "Tea": 40,
      "Coffee": 60,
    },

    {
      label: "January",
      "Tea": 20,
      "Coffee": 80,
    },
  ];

  const allKeys = ["Tea", "Coffee"];

  const colors = {
    "Tea": "#47B747",
    "Coffee": "#03BB7E",
  };

  const svgRef = useRef();
  const wrapperRef = useRef();

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const width = 400,
      height = 130;

    // stacks / layers
    const stackGenerator = stack()
      .keys(allKeys)
      .order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, (layer) => max(layer, (sequence) => sequence[1])),
    ];

    // scales
    const xScale = scaleBand()
      .domain(data.map((d) => d.label))
      .range([0, width])
      .padding(0.7);

    const yScale = scaleLinear()
      .domain(extent)
      .range([height, 0]);

    // rendering
    svg
      .selectAll(".bar")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .style("overflow", "visible")
      .attr("fill", (layer) => colors[layer.key])

      .selectAll("rect")
      .data((layer) => layer)
      .join("rect")
      .style("border-radies", "10px")
      .attr("x", (sequence) => xScale(sequence.data.label))
      .attr("width", xScale.bandwidth())
      .attr("y", (sequence) => yScale(sequence[1]))
      .attr("height", (sequence) => yScale(sequence[0]) - yScale(sequence[1]))
      .attr("width", xScale.bandwidth() * 0.6) // Adjust the width (e.g., 80% of the bandwidth)

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);
      

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").call(yAxis);
  }, [colors, data, allKeys]);
  return (
    <>
      <Card className="item">
        <CardActions>
          <Grid container className="crdHead">
            <Grid item sm>
              <Typography className="sub_heading">Total cash flow</Typography>
            </Grid>
            <Grid item sm={3} className="flx" align="right"></Grid>
          </Grid>
        </CardActions>

        <CardContent>
          {/* <Box > */}
            <svg className="svg" ref={svgRef}>
              <g className="x-axis" />
              {/* <g className="y-axis" /> */}
            </svg>
          {/* </Box> */}
        </CardContent>
      </Card>
    </>
  );
};

export default Chart3;
