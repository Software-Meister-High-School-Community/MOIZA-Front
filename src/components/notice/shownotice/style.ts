import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const BodyFooter = styled.div`
  width: 1100px;
  padding: 0 30px 24px 30px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`;

export const HeartDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const PostHeart = styled.img`
  width: 16px;
  height: 15px;
  margin: 0 6px 0 0;
  cursor: pointer;
`;

export const HeartCount = styled.p`
  width: 31px;
  height: 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.body_medium};
  color: ${({ theme }) => theme.color.gray_color5};
`;

export const EyeDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const eyeImg = styled.img`
  width: 23px;
  height: 16px;
  margin-right: 4px;
`;

export const EyeCount = styled.p`
  width: 40px;
  height: 21px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.body_medium};
  color: ${({ theme }) => theme.color.gray_color5};
`;
