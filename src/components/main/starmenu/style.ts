import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StarName = styled.p`
  width: 220px;
  height: 35px;
  margin-right: 542px;
  margin-bottom: 21px;
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
`;

export const HR = styled.hr`
  width: 760px;
  height: 3px;
  margin-top: 0;
  margin-bottom: 30px;
  border: none;
  background-color: ${({ theme }) => theme.color.secondary_blue_color};
`;

export const PostList = styled.div`
  width: 760px;
  height: 1250px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const StarPost = styled.div`
  width: 366px;
  height: 212px;
  margin-right: 28px;
  margin-bottom: 30px;
  border: 0.5px solid ${({ theme }) => theme.color.gray_color3};
`;

export const PostHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 30px 0 16px 30px;
`;

export const PostField = styled.p`
  margin: 35px 30px 0 0;
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
`;

export const PostText = styled.p`
  width: 306px;
  height: 82px;
  margin: 0 30px 10px 30px;
`;

export const PostFooter = styled.div`
  display: flex;
  justify-content: start;
`;

export const PostHeart = styled.img`
  width: 16px;
  height: 15px;
  margin: 0 6px 31px 30px;
  cursor: pointer;
`;

export const HeartCount = styled.p`
  width: 31px;
  height: 21px;
  margin: 0 200px 0 0;
`;

export const PostLink = styled.p`
  width: 60px;
  height: 16px;
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme }) => theme.color.gray_color4};
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
`;
