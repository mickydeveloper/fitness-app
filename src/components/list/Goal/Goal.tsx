import { Goal } from "../types";
import { CenterWrapper, CheckBoxWrapper, LabelWrapper } from "./GoalStyles";

export function GoalLine({ goal }: { goal: Goal }) {
  return (
    <CenterWrapper>
      <CheckBoxWrapper
        type="checkbox"
        id={goal.id + "goal"}
        name={goal.id + "goal"}
        value={""}
      />
      <LabelWrapper htmlFor={goal.id + "goal"} data-content={goal.goal}>
        {goal.goal}
      </LabelWrapper>
    </CenterWrapper>
  );
}
