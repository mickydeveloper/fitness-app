import styled from "styled-components";

export const ToggleWrapper = styled.input`
  appearance: none;
  position: relative;
  display: inline-block;
  box-sizing: content-box;
  width: 4.5em;
  height: 2em;
  padding: 0.2em;
  border: none;
  cursor: pointer;
  border-radius: 1.5em;
  overflow: hidden;
  background-color: #707070;
  transition: background ease 0.3s;

  &:before {
    content: "on off";
    display: block;
    position: absolute;
    z-index: 2;
    width: 2em;
    height: 2em;
    font-family: system-ui;
    font-size: 1em;
    line-height: 2em;
    font-weight: 500;
    text-transform: uppercase;
    text-indent: -2em;
    word-spacing: 2.55em;
    text-shadow: -1px -1px rgba(0, 0, 0, 0.15);
    white-space: nowrap;
    background: #fff;
    color: #fff;
    border-radius: 1.5em;
    transition: transform cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
  }

  &:checked {
    background-color: #4cd964;
  }

  &:checked:before {
    transform: translateX(2.5em);
  }
`;
