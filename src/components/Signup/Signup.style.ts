import styled from "styled-components";

export const SignupBox = styled.div`
  width: 1024px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  margin-top: 120px;
`;

export const SignupTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.head_small};
  line-height: 37px;
  font-style: normal;
  font-weight: bold;
  margin-right: auto;
`;

export const SignupMiddleWrap = styled.div`
  display: flex;
  margin-top: 72px;
`;

export const SignupFormsWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignupFooterWrap = styled.div`
  margin-top: 70px;
  margin-left: auto;
`;

export const SignupProcedureBox = styled.div`
  margin-right: auto;
  margin-bottom: auto;
  margin-top: 12px;

  .primary {
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.color.main_yellow_color};
    border: 0px;
    border-radius: 100px;
    position: relative;
    display: flex;
    align-items: center;
  }
  .wrapper {
    display: flex;
  }

  .subTitle {
    font-size: ${(props) => props.theme.fontSize.body_large};
    font-style: normal;
    font-weight: normal;
    width: auto;
    text-align: start;
    white-space: nowrap;
    margin-left: 23px;
  }

  .content {
    display: none;
  }
  .progress {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
  }
  .prev {
    display: none;
  }
`;
