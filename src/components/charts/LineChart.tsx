// components/LineChart.js
import { Line } from "react-chartjs-2";
export function LineChart({ chartData }: any) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>You run this Week</h2>
      <Line
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
}
