import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Daegu = styled.div`
  width: 850px;
  height: 530px;
  border-radius: 30px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SchoolName = styled.p`
  width: 510px;
  height: 47px;
  margin: 92px 311px 21px 77px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.head_large};
  font-family: "Roboto", sans-serif;
  font-style: normal;
`;

export const SchoolText = styled.p`
  width: 560px;
  height: 22px;
  margin-left: 77px;
  margin-right: 69px;
  margin-bottom: 70px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: ${(props) => props.theme.fontSize.body_large};
`;

export const Hr = styled.hr`
  width: 181px;
  height: 1px;
  margin-right: 592;
  margin-bottom: 21px;
  margin-left: 77px;
  border: none;
  background-color: #eeb322;
`;

export const SchoolClass1 = styled.p`
  width: 128px;
  height: 20px;
  margin-left: 79px;
  margin-right: 619px;
  margin-bottom: 13px;
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.body_medium};
`;

export const SchoolClass2 = styled.p`
  width: 160px;
  height: 20px;
  margin-left: 79px;
  margin-right: 619px;
  margin-bottom: 13px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.body_medium};
`;

export const SchoolClass3 = styled.p`
  width: 180px;
  height: 20px;
  margin-left: 79px;
  margin-right: 619px;
  margin-bottom: 105px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.body_medium};
`;

export const SchoolHomePage = styled.p`
  width: 140px;
  margin-right: 623px;
  margin-left: 79px;
  cursor: pointer;
  text-decoration: underline 1px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.body_medium};
`;
