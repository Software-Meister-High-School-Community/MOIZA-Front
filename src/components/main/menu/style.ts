import styled from "styled-components";

/* starmenu, noticemenu 공통된 부분 */
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
  border: 1px solid ${({ theme }) => theme.color.gray_color3};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoticeText = styled.p`
  width: 311px;
  height: 19px;
  margin: 17px 0 16px 0;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.main_yellow_color};
  }
`;

export const NoticeHr = styled.hr`
  width: 364px;
  height: 1px;
  margin: 0;
  border: none;
  background-color: ${({ theme }) => theme.color.gray_color3};
`;
