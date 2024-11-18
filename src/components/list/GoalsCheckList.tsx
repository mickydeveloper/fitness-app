import { Card } from "../common/Card";
import { Goal } from "./types";
import { GoalLine } from "./Goal";

function GoalsCheckList({ goalsData }: { goalsData: Array<Goal> }) {
  const renderGoals = () => {
    if (!(goalsData.length > 0)) {
      return <div>No Goals</div>;
    }
    return goalsData.map((data) => {
      return <GoalLine goal={data} />;
    });
  };
  return <Card>{renderGoals()}</Card>;
}

export default GoalsCheckList;
