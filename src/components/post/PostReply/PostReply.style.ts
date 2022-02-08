import styled from "styled-components";

export const PostReplyBox = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
`;

export const PostReplyWrap = styled.div`
  width: 1054px;
  margin: 0px auto;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
`;

export const PostReplyHeaderWrap = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  margin-bottom: 28px;
`;

export const PostReplyIconCircle = styled.div`
  min-width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.color.main_yellow_color};
`;

export const PostReplyInfoWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 32px;
`;

export const PostReplyTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.head_small};
  font-weight: 400;
  margin-bottom: auto;
  text-align: start;
`;

export const PostReplyWriterWrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;

export const PostReplyProfileCircle = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100px;
  background-color: #dcdcdc;
  object-fit: cover;
`;

export const PostReplyWriterInfoTextWrap = styled.p`
  display: flex;
  margin-left: 15px;
  align-items: center;
`;

export const PostReplyWriterInfoText = styled.span`
  color: ${(props) => props.theme.color.gray_color5};
  font-style: normal;
  font-weight: normal;

  strong {
    color: black;
  }
`;

export const PostReplyWriterBreakPoint = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.color.gray_color5};
  margin-left: 16px;
  margin-right: 23px;
`;

export const PostReplyDateInfoWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  justify-content: center;
  row-gap: 5px;

  pre {
    color: ${(props) => props.theme.color.gray_color4};
    font-weight: 400;
    font-size: 12px;
    text-align: end;
  }
`;

export const PostReplyMenuButton = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: 0px;
  outline: none;
  cursor: pointer;
  margin-left: 25px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const PostReplyMiddleWrap = styled.div`
  width: 100%;
  height: auto;
  padding: 40px 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.gray_color1};
  border-radius: 5px 5px 0px 0px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
`;

export const PostReplyContentText = styled.p<{ withPicture: boolean }>`
  width: 100%;
  color: black;
  font-size: ${(props) => props.theme.fontSize.body_large};
  word-break: break-all;
  font-style: normal;
  font-weight: normal;
  line-height: 30px;

  ${(props) => props.withPicture && "margin-bottom : 46px"}
`;

export const PostReplyBottomWrap = styled.div`
  width: 100%;
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.color.gray_color1};
  border-radius: 0px 0px 5px 5px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  border-top: 0px;
  box-sizing: border-box;
  padding: 0px 30px;
`;

export const PostReplyBottomLikeWrap = styled.div`
  display: flex;
  column-gap: 6px;
  align-items: center;

  img {
    width: 22px;
    object-fit: scale-down;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.body_medium};
    color: ${(props) => props.theme.color.gray_color5};
    font-weight: 400;
  }
`;

export const PostReplyBottomViewWrap = styled.div`
  display: flex;
  column-gap: 4px;
  align-items: center;

  img {
    width: 22px;
    object-fit: scale-down;
  }

  p {
    font-size: ${(props) => props.theme.fontSize.body_medium};
    color: ${(props) => props.theme.color.gray_color5};
    font-weight: 400;
  }
`;

export const PostReplyLine = styled.hr`
  width: 100%;
  border: 0px;
  border-top: 1px solid ${(props) => props.theme.color.gray_color3};
  margin-top: 80px;
  margin-bottom: 50px;
`;

export const PostReplyCommentTitleWrap = styled.div`
  width: 100%;
  margin-bottom: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: ${(props) => props.theme.fontSize.head_small};
    color: black;
    font-style: normal;
    font-weight: normal;

    strong {
      color: ${(props) => props.theme.color.main_blue_color};
      font-style: normal;
      font-weight: normal;
    }
  }
`;
