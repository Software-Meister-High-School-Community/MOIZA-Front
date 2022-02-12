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

/* starmenu */
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
  background-color: white;
  cursor: pointer;
  margin-right: 28px;
  margin-bottom: 30px;
  border: 0.5px solid ${({ theme }) => theme.color.gray_color3};
`;

export const PostHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const UserDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const PostIcon = styled.img`
  width: 25px;
  height: 25px;
  margin: 30px 13px 16px 30px;
`;

export const PostUser = styled.p`
  width: 150px;
  height: 16px;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
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
  line-height: 25px;
  font-size: ${({ theme }) => theme.fontSize.body_large};
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
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
  margin: 0 180px 0 0;
`;

export const PostDate = styled.p`
  width: 72px;
  height: 16px;
  color: ${({ theme }) => theme.color.gray_color4};
  font-size: ${({ theme }) => theme.fontSize.body_small};
  font-weight: 400;
  font-style: normal;
  font-family: "Roboto", sans-serif;
`;
