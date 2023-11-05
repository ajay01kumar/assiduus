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

  const [arr1, setArr1] = React.useState([0, 0, 0, 0]);
  const [arr2, setArr2] = React.useState([0, 0, 0, 0]);

  const [data, setData] = React.useState([0, 0, 0, 0]);
  const svgRef = React.useRef();
  const [age, setAge] = React.useState("jan");
  const [age1, setAge1] = React.useState("manager");

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  React.useEffect(() => {
    //setting up svg
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
  }, [data, age, age1, ...arr1, ...arr2]);

  const handleChange = (event) => {
    let val = event.target.value;
    let arr1 = [];
    console.log(val);
    {
      bData?.map((i) => arr1.push(i[val]));
    }
    setArr1(arr1);
    setAge(event.target.value);
    setData(arr1)
    // [...arr1].map((e, i) => e + arr2[i]));
    console.log(arr1);
  };
  const handleChange1 = (event) => {
    let val = event.target.value;
    let arr2 = [];
    console.log(val);
    {
      bData?.map((i) => arr2.push(i[val]));
    }
    setArr2(arr2);
    setData(arr2)
      // [...arr1].map((e, i) => e + arr2[i]));
    console.log(arr2);
    setAge1(event.target.value);
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
  console.log(data, arr1, arr2);
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
                value={age1}
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
                value={age}
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
