import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.li<{ fixed: boolean }>`
  width: 1200px;
  height: 65px;
  box-sizing: border-box;
  padding: 20px 23px 20px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > img {
    width: 30px;
    height: 30px;
  }
  > h1 {
    margin-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => (props.fixed ? "#FFB500" : "#555555")};
  }
`;

export const Line = styled.div`
  max-width: 1px;
  height: 24px;
  border: 0px;
  border-right: 1px solid ${(props) => props.theme.color.gray_color3};
`;

export const Date = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  > span {
    font-family: "Roboto", sans-serif;
    font-style: nomal;
    font-weight: 400;
    margin-right: 30px;
    font-size: 14px;
    line-height: 16px;
    color: ${({ theme }) => theme.color.gray_color4};
    margin-left: 6px;
  }
`;

export const Views = styled.em`
  margin-left: 45px;
  display: flex;
  align-items: center;
  > span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
    margin-left: 6px;
  }
`;

export const Comment = styled(Views)``;

export const Hearts = styled(Views)`
  margin-left: 45px;
  margin-right: 15px;
  > span {
    margin-left: 7px;
  }
`;
