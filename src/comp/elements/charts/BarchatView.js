import React, { useEffect, useRef } from "react";
import { select, axisBottom, scaleBand, scaleLinear } from "d3"; // Make sure to include the specific D3 functions you need
import "./bar.css"
function AxisBottom({ scale, transform }) {
    const ref = useRef(null);
  
    useEffect(() => {
      if (ref.current) {
        // const axis = axisBottom(scale); // Create the X-axis
        select(ref.current).call(axisBottom(scale));
        // axis.select(".domain").attr("stroke", "white"); 
      }
    }, [scale]);
  
    return <g ref={ref} transform={transform} />;
  }




  
  function Bars({ data, height, scaleX, scaleY,barRadius }) {
    return (
      <>
        {data.map(({ value, label }) => (
          <rect
            key={`bar-${label}`}
            x={scaleX(label)}
            y={scaleY(value)}
            width={20}
            height={height - scaleY(value)}
            //fill="teal"
            fill="rgb(71, 183, 71)"  
            rx={barRadius} // Set the x-axis corner radius
            ry={barRadius} // 
          />
        ))}
      </>
    );
  }
  
  export function BarchatView({ data }) {
    const margin = { top: 10, right: 0, bottom: 20, left: 30 };
    const width = 500 - margin.left - margin.right;
    const height = 150 - margin.top - margin.bottom;
  
    

    const scaleX = scaleBand()
      .domain(data.map(({ label }) => label))
      .range([0, width])
      .padding(0.5);
    const scaleY = scaleLinear()
      .domain([0, Math.max(...data?.map(({ value }) => value))])
      .range([height, 0]);
  
    return (
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} className="x-axis" />
          {/* <AxisLeft scale={scaleY} /> */}
          <Bars stroke="white"  data={data} height={height} scaleX={scaleX} scaleY={scaleY} barRadius={7} />
        </g>
      </svg>
    );
  }
  