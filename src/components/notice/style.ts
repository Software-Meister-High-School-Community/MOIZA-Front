import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 103px;
`;

export const NoticeHeadDiv = styled.div`
  width: 1196px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NowRoute = styled.p`
  width: 90px;
  height: 16px;
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
  font-family: Roboto;
  color: ${({ theme }) => theme.color.main_yellow_color};
  margin-left: 30px;
`;

export const NoticeNameDiv = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: flex-start;
`;

export const NoticeName = styled.p`
  width: 130px;
  height: 38px;
  font-size: ${({ theme }) => theme.fontSize.head_small};
  font-style: normal;
  font-weight: 400;
  font-family: Roboto;
`;

export const PostDiv = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: end;
`;

export const Post = styled.div`
  display: flex;
  justify-content: center;
`;
