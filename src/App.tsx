import { useState } from "react";
import { AppWrapper } from "./AppStyles";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { NewData, DailyGoalsData } from "./mock/Data";
import { LineChart } from "./components/charts/LineChart";
import { Card } from "./components/common/Card";
import GoalsCheckList from "./components/list/GoalsCheckList";

Chart.register(CategoryScale);

function App() {
  const [chartData, setChartData] = useState({
    labels: NewData.map((data) => data.day),
    datasets: [
      {
        data: NewData.map((data) => data.kmRun),
        borderColor: "#36A2EB",
        backgroundColor: "#9BD0F5",
        fill: true,
        borderWidth: 1,
        lineTension: 0.4,
        pointRadius: 0,
      },
    ],
  });
  const [goalsData, setGoalsData] = useState(DailyGoalsData);

  return (
    <AppWrapper>
      <Card>
        <LineChart chartData={chartData} />
      </Card>
      <GoalsCheckList goalsData={goalsData} />
    </AppWrapper>
  );
}

export default App;
