import styled from "styled-components";

export const CheckBoxWrapper = styled.input`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  color: #363839;
  border: 1px solid #bdc1c6;
  border-radius: 4px;
  appearance: none;
  margin: 0;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 2px;
    left: 7px;
    width: 8px;
    height: 14px;
    border-style: solid;
    border-color: #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked,
  &:hover {
    color: #fff;
    border-color: #06842c;
    background: #06842c;
    &::before {
      opacity: 1;
    }
    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
`;

export const LabelWrapper = styled.label`
  position: relative;
  cursor: pointer;
  font-size: 1.5em;
  font-weight: 600;
  padding: 0 0.25em 0;
  user-select: none;
  &::before {
    position: absolute;
    content: attr(data-content);
    color: #9c9e9f;
    clip-path: polygon(0 0, 0 0, 0% 100%, 0 100%);
    text-decoration: line-through;
    text-decoration-thickness: 3px;
    text-decoration-color: #363839;
    transition: clip-path 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
`;

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
`;
