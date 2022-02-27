import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;

export const NoticeHeadDiv = styled.div`
  width: 1196px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const PostDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

export const PostHead = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PostLogo = styled.img`
  width: 42px;
  height: 42px;
`;

export const PostName = styled.p<{
  fixed: boolean;
}>`
  margin-right: 435px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.head_small};
  color: ${(props) => (props.fixed ? "#FFB500" : "#555555")};
`;

export const PostTime = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.body_small};
  color: ${({ theme }) => theme.color.gray_color4};
`;

export const PostBody = styled.div`
  width: 1100px;
  height: 335px;
  margin-top: 47px;
  background-color: white;
  padding: 30px 30px 0 30px;
  display: flex;
  flex-direction: column;
`;

export const BodyText = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.body_large};
  color: ${({ theme }) => theme.color.gray_color6};
`;
