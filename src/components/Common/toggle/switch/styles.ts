import styled from "styled-components";

export const Wrapper = styled.label`
  position: relative;
  width: 38px;
  height: 20px;
  box-sizing: border-box;
  display: flex;
  > input {
    opacity: 0;
    width: 0;
    height: 0;
    margin-left:20px;
    :checked + .slider {
      background-color: ${props=>props.theme.color.main_yellow_color};
    }
    :checked + .slider:before {
      transform: translateX(16px);
      background-color: #ffffff;
    }
  }
  > .slider {
    position: absolute;
    border-radius: 10px;
    border: 1px solid #E0E0E0;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    transition: 0.5s;
    display:flex;
    align-items:center;
    :before{
      margin-left: 2px;
      content: "";
      height: 16px;
      width: 16px;
      background-color: #C4C4C4;
      border-radius: 50%;
    }
  }
`