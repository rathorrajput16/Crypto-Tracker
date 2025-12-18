import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({ historicalData }) => {

  const [data, setData] = useState([["Date", "Prices"]])

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (historicalData.prices) {
      historicalData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1]
        ])
      })
      setData(dataCopy)
    }
  }, [historicalData])
  return (
    
    <Chart
  chartType="LineChart"
  data={data}
  width="100%"
  height="400px"
  options={{
    backgroundColor: "transparent",
    legend: { position: "none" },
    curveType: "function",
    colors: ["#4500c6"],
    hAxis: {
      textStyle: { color: "#9ca3af" },
      gridlines: { color: "transparent" },
    },
    vAxis: {
      textStyle: { color: "#9ca3af" },
      gridlines: { color: "#1f2933" },
    },
    chartArea: {
      width: "85%",
      height: "70%",
    },
    lineWidth: 3,
  }}
/>

  )
}

export default LineChart