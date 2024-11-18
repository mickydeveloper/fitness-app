import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: grid;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 3;
`;

export const Button = styled.button`
  border-radius: 8px;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background: lightgrey;
  cursor: pointer;
  transition: all ease-in-out 0.4s;
  border: none;

  &:hover,
  &:active {
    background: #9bd0f5;
    border: none;
    color: white;
  }

  &:focus {
    border: none;
  }
`;
