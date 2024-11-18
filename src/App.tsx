import { useState } from "react";
import { AppWrapper, ModeButtonWrapper } from "./AppStyles";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { NewData, DailyGoalsData } from "./mock/Data";
import { LineChart } from "./components/charts/LineChart";
import { Card } from "./components/common/Card";
import GoalsCheckList from "./components/list/GoalsCheckList";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { QuickActionsButtons } from "./components/quickactions/QuickActionButtons";
import { ToggleWrapper } from "./components/common/Toggle";
import { CenterWrapper } from "./components/list/Goal/GoalStyles";

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
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <AppWrapper>
        <Card>
          <LineChart chartData={chartData} />
        </Card>
        <GoalsCheckList goalsData={goalsData} />
        <QuickActionsButtons />
        <ModeButtonWrapper>
          Dark Mode
          <ToggleWrapper type="checkbox" onClick={themeToggler} />
        </ModeButtonWrapper>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
