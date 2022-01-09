import styled, { css } from "styled-components";

export const SignupProcedureBox = styled.img`
  margin-right: auto;
  margin-bottom: auto;
  margin-top: 12px;
`;

export const SignupProcedureLineWrap = styled.div`
  position: relative;
  height: 220px;
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

export const SignupProcedureLine = styled.div<{ isArrival: boolean }>`
  border-right: 2px solid
    ${(props) =>
      props.isArrival
        ? props.theme.color.main_yellow_color
        : props.theme.color.gray_color3};
  height: 110px;
  box-sizing: border-box;
`;

export const SignupProcedureWrap = styled.div`
  display: flex;
  position: absolute;
  height: 22px;
  align-items: center;
  width: auto;

  &:first-child {
    transform: translate(-4px, -50%);
    top: 0px;
  }

  &:nth-child(2) {
    transform: translate(-4px, -50%);
    top: 50%;
  }

  &:last-child {
    transform: translate(-4px, 50%);
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
          border-radius: 100px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `
      : css`
          display: none;
        `}
`;

export const SignupProcedurePoint = styled.div<{ isArrival: boolean }>`
  width: 10px;
  height: 10px;
  background-color: ${(props) =>
    props.isArrival
      ? props.theme.color.main_yellow_color
      : props.theme.color.gray_color3};
  border: 0px;
  border-radius: 100px;
  position: relative;
`;

export const SignupProcedureText = styled.div<{ isArrival: boolean }>`
  font-size: ${(props) => props.theme.fontSize.body_large};
  font-style: normal;
  font-weight: normal;
  width: auto;
  text-align: start;
  white-space: nowrap;
  margin-left: 23px;

  ${(props) =>
    props.isArrival
      ? css`
          color: ${props.theme.color.main_yellow_color};
        `
      : css`
          color: ${props.theme.color.gray_color3};
        `}
`;
