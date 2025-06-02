import React from "react";
import Chart from "react-apexcharts";

const GenreDistributionChart = () => {
  // Example data: Number of books per genre
  const genres = [
    "Fantasy",
    "Science Fiction",
    "Non-fiction",
    "Classic",
    "Programming"
  ];
  const bookCounts = [30, 20, 25, 15, 10];

  const series = bookCounts;

  const options = {
    chart: {
      type: "donut"
    },
    labels: genres,
    title: {
      text: "Genre Distribution",
      align: "center",
      style: {
        fontSize: "18px"
      }
    },
    legend: {
      position: "bottom"
    },
    colors: ["#007bff", "#6610f2", "#28a745", "#fd7e14", "#dc3545"], // Bootstrap-ish colors
    dataLabels: {
      enabled: true,
      formatter: (val) => `${val.toFixed(1)}%`
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  return (
    <div className="p-4 shadow rounded bg-white">
      <Chart options={options} series={series} type="donut" height={350} />
    </div>
  );
};

export default GenreDistributionChart;
