import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Gwangju = styled.div`
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
  margin: 92px 68px 21px 300px;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSize.head_large};
  font-family: "Roboto", sans-serif;
  font-style: normal;
`;

export const SchoolText = styled.p`
  width: 485px;
  height: 22px;
  margin-left: 320px;
  margin-right: 69px;
  margin-bottom: 70px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.button_large};
`;

export const Hr = styled.hr`
  width: 181px;
  height: 1px;
  margin-bottom: 21px;
  border: none;
  margin-left: 600px;
  background-color: #eeb322;
`;

export const SchoolClass1 = styled.p`
  width: 128px;
  height: 20px;
  margin-left: 654px;
  margin-right: 70px;
  margin-bottom: 10px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.body_medium};
`;

export const SchoolClass2 = styled.p`
  width: 89px;
  height: 20px;
  margin-left: 694px;
  margin-right: 68px;
  margin-bottom: 105px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.body_medium};
`;

export const SchoolHomePage = styled.p`
  width: 140px;
  margin-left: 650px;
  cursor: pointer;
  text-decoration: underline 1px;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-size: ${(props) => props.theme.fontSize.body_medium};
`;
