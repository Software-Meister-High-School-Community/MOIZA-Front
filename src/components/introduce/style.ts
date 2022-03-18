import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: white;
`;

export const firstPage = styled.div`
  padding: 124px 0;
  margin: 0 auto;
  width: 1200px;
  > img {
    width: 55px;
    height: 24px;
  }
`;

export const firstTitleDiv = styled.div`
  margin-bottom: 300px;
  > h3 {
    font-size: ${({ theme }) => theme.fontSize.head_large};
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  > p {
    margin-top: 21px;
    font-size: ${({ theme }) => theme.fontSize.body_large};
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    line-height: 30px;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 80px;
  > button {
    margin-right: 40px;
  }
`;

export const SecondPage = styled.div`
  margin: 0 auto;
  padding: 0 0 124px;
  width: 1200px;
`;

export const SecondTitle = styled.div`
  > h3 {
    margin-bottom: 110px;
    font-size: ${({ theme }) => theme.fontSize.head_large};
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
`;

export const QuestionDiv = styled.div`
  > hr {
    margin-top: 34px;
    background-color: ${({ theme }) => theme.color.gray_color3};
  }
  > p {
    display: flex;
    justify-content: center;
    margin-bottom: 122px;
    margin-top: 40px;
    white-space: pre-wrap;
    line-height: 28px;
    color: ${({ theme }) => theme.color.gray_color5};
    font-size: ${({ theme }) => theme.fontSize.button_large};
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
`;

export const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  > h6 {
    margin-right: 20px;
    margin-left: 20px;
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.main_blue_color};
    font-family: "Roboto", sans-serif;
  }
  > p {
    margin-top: 1px;
    font-size: 19px;
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
`;

export const arrowDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 120px;
`;

export const puzzleImg = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 190px;
`;

export const FooterDiv = styled.div`
  height: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  > p {
    margin-left: 260px;
    line-height: 30px;
    font-size: ${({ theme }) => theme.fontSize.body_large};
    font-weight: 500;
    font-family: "Roboto", sans-serif;
  }
  > img {
    width: 200px;
    margin-right: 260px;
  }
`;
