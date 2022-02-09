import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.li`
  width: 1200px;
  height: 65px;
  box-sizing: border-box;
  padding: 20px 23px 20px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 13px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 24px;
    height: 24px;
  }
  > h1 {
    margin-left: 20px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    line-height: 21px;
    font-size: ${({ theme }) => theme.fontSize.body_large};
    color: ${({ theme }) => theme.color.gray_color6};
  }
`;

export const State = styled.em`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 34px;
  border: 1px solid ${({ theme }) => theme.color.gray_color3};
  border-radius: 25px;
  > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.body_small};
    color: ${({ theme }) => theme.color.gray_color5};
  }
`;
