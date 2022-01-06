import styled, { css } from "styled-components";

export const SignupProcedureBox = styled.div`
  width: 22px;
  display: flex;
  justify-content: center;
`;

export const SignupProcedureLine = styled.div`
  position: relative;
  height: 220px;
  border-right: 2px solid ${(props) => props.theme.color.gray_color3};
`;

export const SignupProcedureWrap = styled.div`
  display: flex;
  position: absolute;
  height: 22px;
  align-items: center;
  width: auto;

  &:first-child {
    transform: translate(0%, -50%);
    top: 0px;
  }

  &:nth-child(2) {
    transform: translate(0%, -50%);
    top: 50%;
  }

  &:last-child {
    transform: translate(0%, 50%);
    bottom: 0px;
  }
`;

export const SignupProcedurePointOutside = styled.div<{ isArrival: boolean }>`
  ${(props) =>
    props.isArrival
      ? css`
          min-width: 22px;
          min-height: 22px;
          border: 2px solid ${(props) => props.theme.color.main_yellow_color};
          background: none;
          align-items: center;
          justify-content: center;
          display: flex;
        `
      : css`
          min-width: 10px;
          min-height: 10px;
          background-color: ${(props) => props.theme.color.gray_color3};
        `}

  border-radius: 100px;
`;

export const SignupProcedurePoint = styled.div<{ isArrival: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.theme.color.main_yellow_color};
  border: 0px;
  border-radius: 100px;
  display: none;

  ${(props) => props.isArrival && "display : block"}
`;

export const SignupProcedureText = styled.div<{ isArrival: boolean }>`
  font-size: ${(props) => props.theme.fontSize.body_large};
  font-style: normal;
  font-weight: normal;
  height: 100%;
  width: auto;
  text-align: start;

  ${(props) =>
    props.isArrival
      ? css`
          color: ${props.theme.color.main_yellow_color};
          margin-left: 17px;
        `
      : css`
          color: ${props.theme.color.gray_color3};
          margin-left: 23px;
        `}
`;
