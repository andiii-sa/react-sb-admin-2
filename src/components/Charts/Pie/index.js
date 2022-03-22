import React, { useEffect, useRef } from "react";
import Chart from "chart.js";
import CardDropdown from "components/Cards/Dropdown";

export default function ChartPie() {
  const ChartRef = useRef(null);

  useEffect(() => {
    const myPieChart = ChartRef.current.getContext("2d");

    new Chart(myPieChart, {
      type: "doughnut",
      data: {
        labels: ["Direct", "Referral", "Social"],
        datasets: [
          {
            data: [55, 30, 15],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
            hoverBackgroundColor: ["#2e59d9", "#17a673", "#2c9faf"],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: "rgb(255,255,255)",
          bodyFontColor: "#858796",
          borderColor: "#dddfeb",
          borderWidth: 1,
          xPadding: 15,
          yPadding: 15,
          displayColors: false,
          caretPadding: 10,
        },
        legend: {
          display: false,
        },
        cutoutPercentage: 80,
      },
    });
  }, []);

  return (
    <>
      <CardDropdown title="Pie Charts">
        <div className="chart-pie pt-4 pb-2">
          <canvas id="myPieChart" ref={ChartRef} />
        </div>
        <div className="mt-4 text-center small">
          <span className="mr-2">
            <i className="fas fa-circle text-primary" /> Direct
          </span>
          <span className="mr-2">
            <i className="fas fa-circle text-success" /> Social
          </span>
          <span className="mr-2">
            <i className="fas fa-circle text-info" /> Referral
          </span>
        </div>
      </CardDropdown>
    </>
  );
}
