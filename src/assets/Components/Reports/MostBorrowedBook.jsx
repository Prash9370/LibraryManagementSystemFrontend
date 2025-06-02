import React from 'react'
import Chart from "react-apexcharts";

function MostBorrowedBook() {
  // Sample data: Top 5 borrowed books
  const series = [
    {
      name: "Times Issued",
      data: [120, 95, 80, 70, 55] // Borrow counts
    }
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: { show: true }
    },
    title: {
      text: "Top 5 Most Borrowed Books",
      align: "center",
      style: {
        fontSize: "18px"
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%"
      }
    },
    dataLabels: {
      enabled: true
    },
    xaxis: {
      categories: [
        "The Hobbit",
        "1984",
        "Sapiens",
        "Clean Code",
        "The Alchemist"
      ],
      title: {
        text: "Number of Times Borrowed"
      }
    },
    colors: ["#28a545"] // Bootstrap green
  };

  return (
    <div className="p-4 shadow rounded bg-white">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}

export default MostBorrowedBook