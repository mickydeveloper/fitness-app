import styled from "styled-components";
import { CenterWrapper } from "./components/list/Goal/GoalStyles";

export const AppWrapper = styled.main`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const ModeButtonWrapper = styled(CenterWrapper)`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
`;
