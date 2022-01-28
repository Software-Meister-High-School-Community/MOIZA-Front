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

  .stepWrap {
    padding: 0px;
  }

  .stepProgress {
    display: flex;
    flex-direction: column;
    row-gap: 100px;
  }

  .stepSteps {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 22px;
    min-height: 22px;
    position: relative;
    margin-right: auto;

    span {
      min-width: 22px;
      min-height: 22px;
      color: #e0e0e0;
      display: flex;
      align-items: center;
      justify-content: center;
    } // step 안에 동그라미

    svg {
      width: 13px;
    } // step 안에 check 이미지
  }

  ._2Jtxm._35Ago span {
    background-color: ${(props) => props.theme.color.main_yellow_color};

    &:hover {
      background-color: ${(props) => props.theme.color.main_yellow_color};
    }
  } //현재 스텝일 경우 동그라미

  ._2Jtxm._2ZUAI span {
    color: white;
  } // 지나간 스텝인 경우 동그라미

  ._2Jtxm::before {
    width: 110px;
    transform: rotate(90deg);
    top: -50px;
    left: -44px;
  } // 스텝의 긴 막대기

  .stepPrimary {
    position: absolute !important;
    top: 50% !important;
    left: 45px !important;
    transform: translateX(0%);
    width: 100%;
    transform: translate(0%, -50%);
    display: flex;
    align-items: center;
    color: #e0e0e0;
  } // 스텝의 글자 박스

  ._2Jtxm._35Ago ._1ixJ3 {
    color: ${(props) => props.theme.color.main_yellow_color};
  } // 현재 스텝일 경우 글자 박스

  ._2Jtxm._2ZUAI ._1ixJ3 {
    color: black;
  } // 지나간 스텝일 경우 글자 박스

  .stepSubTitle {
    font-size: ${(props) => props.theme.fontSize.body_large};
    font-style: normal;
    font-weight: normal;
    width: auto;
    text-align: start;
    white-space: nowrap;
  } // 글자 박스 안에 글자

  .stepContent {
    display: none;
  }

  ._2pGos._3CDiP {
    display: none;
  } // 이전 스텝으로 가는 버튼
`;
