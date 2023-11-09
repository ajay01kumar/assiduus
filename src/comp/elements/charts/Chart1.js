import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import * as d3 from "d3";

const data1 = [{ type: 'manager', info: { jan: [10, 20, 15, 10], feb: [5, 20, 5, 10] } },
{ type: 'manager', info: { jan: [10, 20, 1, 10], feb: [1, 2, 5, 8] } },
{ type: 'employee', info: { jan: [10, 20, 15, 10], feb: [5, 20, 15, 10] } },
{ type: 'employee', info: { jan: [10, 20, 15, 10], feb: [10, 10, 15, 10] } }]

const Chart1 = () => {
  const bData = [
    {
      id: 9,
      time: "7 AM",
      manager: 100,
      employee: 50,
      jan: 20,
      feb: 7,
    },
    {
      id: 10,
      time: "8 AM",
      manager: 90,
      employee: 150,
      jan: 30,
      feb: 40,
    },
    {
      id: 11,
      time: "9 AM",
      manager: 80,
      employee: 75,
      jan: 40,
      feb: 147,
    },
    {
      id: 12,
      time: "10 AM",
      manager: 110,
      employee: 90,
      jan: 50,
      feb: 253,
    },
  ];

  const [arr1, setArr1] = React.useState([]);
  const [arr2, setArr2] = React.useState([]);

  const [data, setData] = React.useState([]);

  const svgRef = React.useRef();
  const [month, setMonth] = React.useState("jan");
  const [service, setService] = React.useState("manager");

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);


  React.useEffect(() => {
    //setting up svg
    console.log(month, service)


    {
      data1.map((i) => {
        if (service == 'manager') {
          if (month == 'jan') {
            setData([30, 50, 90, 10])
          }
          if (month == 'feb'){
            setData([30, 50, 20, 60])
          }
        }
        if (service == 'employee') {
          if (month == 'jan') {
            setData([90, 80, 30, 40])
          }
          if (month == 'feb'){
            setData([89, 28, 70, 98])
          }
        }
      })}
        const w = 400,
          h = 140;
        const svg = d3
          .select(svgRef.current)
          .attr("width", w)
          .attr("height", h)

          // .style("background", "#d3d3d3")
          .style("overflow", "visible");

        //scaling
        const xScale = d3
          .scaleLinear()
          .domain([0, data?.length - 1])
          .range([0, w]);

        const yScale = d3
          .scaleLinear()
          .domain([0, h])
          .range([h, 0]);

        const generateScaledLine = d3
          .line()
          .x((d, i) => xScale(i))
          .y(yScale)
          .curve(d3.curveCardinal);
        //axes
        const xAxis = d3
          .axisBottom(xScale)
          .ticks(data.length)
        // .tickFormat((i) => i + 1);

        const yAxis = d3.axisLeft(yScale).ticks(5);
        svg
          .append("g")
          .call(xAxis)
          .attr("transform", `translate(0, ${h})`);

        // svg.append("g").call(yAxis);
        //data for svg
        svg
          .selectAll(".line")
          .data([data])
          .join("path")
          .attr("d", (d) => generateScaledLine(d))
          .attr("fill", "none")
          .attr("stroke", "#47AD60");
      }, [data]);

      const handleChange = (event) => {

        setMonth(event.target.value);


      };
      const handleChange1 = (event) => {

        setService(event.target.value);
      };
      const handleClose1 = () => {
        setOpen1(false);
      };

      const handleOpen1 = () => {
        setOpen1(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      const handleOpen = () => {
        setOpen(true);
      };
      console.log(data);
      return (
        <Card className="item">
          <CardActions>
            <Grid container className="crdHead">
              <Grid item sm>
                <Typography className="sub_heading">Checking accounts</Typography>
              </Grid>
              <Grid item sm={7 / 2} className="sub_heading">
                <FormControl
                  sx={{
                    m: 0.5,
                    width: "95%",
                    "& .MuiInputBase-root": {
                      height: "4vh",
                    },
                  }}
                >
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open1}
                    onClose={handleClose1}
                    onOpen={handleOpen1}
                    size="small"
                    value={service}
                    onChange={handleChange1}
                  >
                    <MenuItem value="manager">Manage</MenuItem>
                    <MenuItem value="employee">Employee</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item sm={7 / 2} className="sub_heading">
                <FormControl
                  sx={{
                    m: 0.5,
                    width: "95%",
                    "& .MuiInputBase-root": {
                      height: "4vh",
                    },
                  }}
                >
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    size="small"
                    value={month}
                    onChange={handleChange}
                  >
                    <MenuItem value="jan">January</MenuItem>
                    <MenuItem value="feb">Febuary</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardActions>

          <CardContent>
            <Box align="center">
              <svg ref={svgRef}></svg>
            </Box>
          </CardContent>
        </Card>
      );
    };

    export default Chart1;
