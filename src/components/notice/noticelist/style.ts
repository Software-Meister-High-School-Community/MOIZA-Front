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
  .pagenation {
    margin-top: 130px;
  }
`;

export const SelectDiv = styled.div`
  display: flex;
  justify-content: end;
`;

export const Post = styled.div`
  display: flex;
  justify-content: center;
`;
