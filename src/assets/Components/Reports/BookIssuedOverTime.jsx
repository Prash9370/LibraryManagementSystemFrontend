import React from 'react'
import Chart from "react-apexcharts";

function BookIssuedOverTime() {
  // Example data: Books issued per month
  const series = [
    {
      name: "Books Issued",
      data: [45, 60, 80, 50, 95, 120, 70, 65, 90, 100, 75, 110] // One per month
    }
  ];

  const options = {
    chart: {
      type: "line",
      height: 350,
      toolbar: {
        show: false
      }
    },
    title: {
      text: "Books Issued Over Time (Monthly)",
      align: "center",
      style: {
        fontSize: "18px"
      }
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      title: {
        text: "Month"
      }
    },
    yaxis: {
      title: {
        text: "Books Issued"
      }
    },
    stroke: {
      curve: "smooth",
      width: 3
    },
    colors: ["#007bff"],
    markers: {
      size: 4
    },
    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5
      }
    }
  };

  return (
    <div className="p-4 shadow rounded bg-white">
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}

export default BookIssuedOverTime