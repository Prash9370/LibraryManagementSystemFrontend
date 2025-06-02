import React from "react";
import Chart from "react-apexcharts";

const PenaltyCollectionChart = () => {

  const series = [
    {
      name: "Penalty Collected (₹)",
      data: [500, 800, 600, 900, 750, 1100, 950, 700, 850, 1200, 650, 1000], // Monthly amounts
    },
  ];

  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    title: {
      text: "Penalty Collection Over Time",
      align: "center",
      style: {
        fontSize: "18px",
      },
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      title: {
        text: "Month",
      },
    },
    yaxis: {
      title: {
        text: "Penalty Amount (₹)",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 90, 100],
      },
    },
    colors: ["#dc3545"], // Bootstrap red
    grid: {
      borderColor: "#a0e0e0",
    },
    tooltip: {
      y: {
        formatter: (val) => `₹${val}`,
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default PenaltyCollectionChart;
