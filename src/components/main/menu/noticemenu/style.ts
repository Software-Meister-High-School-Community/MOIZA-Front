import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StarName = styled.p<{
  width: string;
  height: string;
  margin: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
`;

export const HR = styled.hr<{
  width: string;
  height: string;
  background: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: 0 0 30px 0;
  border: none;
  background-color: ${(props) => props.background};
`;

/* noticemenu */

export const NoticeHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoreBtn = styled.p`
  width: 50px;
  height: 16px;
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.color.gray_color4};
  text-decoration: underline;
  cursor: pointer;
`;

export const NoticeList = styled.div`
  width: 380px;
  height: 371px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.color.gray_color3};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoticeDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NoticeTextDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const NoticeText = styled.p<{
  fixed: boolean;
}>`
  width: 240px;
  height: 19px;
  margin: 17px 26px 16px 14px;
  cursor: pointer;
  color: ${(props) => (props.fixed ? "#FFB500" : "#555555")};
  font-size: ${({ theme }) => theme.fontSize.body_medium};
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
`;

export const NoticeDate = styled.p`
  width: 80px;
  height: 14px;
  color: ${({ theme }) => theme.color.gray_color4};
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
`;

export const NoticeHr = styled.hr`
  width: 364px;
  height: 1px;
  margin: 0;
  border: none;
  background-color: ${({ theme }) => theme.color.gray_color3};
`;
