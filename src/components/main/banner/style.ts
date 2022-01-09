import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Banner = styled.div`
  width: 850px;
  height: 530px;
  border-radius: 30px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SchoolName = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.head_large};
  font-family: "Roboto", sans-serif;
  font-style: normal;
  margin: ${(props) => props.margin};
`;

export const SchoolText = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-size: ${({ theme }) => theme.fontSize.body_large};
`;

export const Hr = styled.hr<{
  margin: string;
}>`
  width: 181px;
  height: 1px;
  margin: ${(props) => props.margin};
  border: none;
  background-color: #eeb322;
`;

export const SchoolClass1 = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.body_medium};
`;

export const SchoolClass2 = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.body_medium};
`;
export const SchoolClass3 = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.body_medium};
`;

export const SchoolHomePage = styled.p<{
  width: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  cursor: pointer;
  text-decoration: underline 1px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  font-size: ${({ theme }) => theme.fontSize.body_medium};
`;
