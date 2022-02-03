import styled, { keyframes } from "styled-components";

export const SignupSuccessBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 175px;
`;

const SuccessIconAnimation = keyframes`
  0%{
    transform: rotateZ(0);
     }
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-20deg);
  }
  20% {
    transform: rotateZ(20deg);
  }
  25% {
    transform: rotateZ(-20deg);
  }
  30% {
    transform: rotateZ(10deg);
  }
  35% {
    transform: rotateZ(-8deg);
  }
  40% {
    transform: rotateZ(0)s;
  }
  100% {
    transform: rotateZ(0);
  }
  `;

export const SingupSuccessIconCircle = styled.div`
  width: 71px;
  height: 71px;
  background-color: ${(props) => props.theme.color.main_blue_color};
  border-radius: 100px;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${SuccessIconAnimation} 2s linear infinite;

    path {
      width: 100%;
    }
  }
`;

export const SignupSuccessText = styled.p`
  color: black;
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.fontSize.head_small};
  text-align: center;
  margin-top: 47px;
  margin-bottom: 120px;
`;

export const SignupSuccessButtonWrap = styled.div`
  margin: 0px auto;
`;
