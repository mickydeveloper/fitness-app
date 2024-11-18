import { Goal } from "./types";

export function GoalLine({ goal }: { goal: Goal }) {
  return <div>{goal.goal}</div>;
}
