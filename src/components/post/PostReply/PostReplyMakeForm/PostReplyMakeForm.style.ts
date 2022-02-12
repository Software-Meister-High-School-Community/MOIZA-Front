import styled from "styled-components";

export const PostReplyMakeFormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    font-size: ${(props) => props.theme.fontSize.body_medium};
    color: ${(props) => props.theme.color.gray_color4};
  }
`;

export const PostReplyMakeFormHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: ${(props) => props.theme.fontSize.head_small};
    color: black;
    font-style: normal;
    font-weight: normal;
  }
`;

export const PostReplyMakeFormTextarea = styled.textarea`
  width: 100%;
  height: 490px;
  resize: none;
  background-color: ${(props) => props.theme.color.gray_color1};
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
  color: ${(props) => props.theme.color.gray_color5};
  font-size: ${(props) => props.theme.fontSize.body_large};
  margin-top: 40px;
  margin-bottom: 16px;
  outline: none;
  font-style: normal;
  font-weight: normal;
`;

export const PostReplyMakeFormCountText = styled.p`
  font-size: ${(props) => props.theme.fontSize.body_medium};
  color: ${(props) => props.theme.color.gray_color4};
  text-align: end;
  margin-bottom: 35px;
`;

export const PostReplyMakeFormFileForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 30px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.gray_color1};
  margin-bottom: 30px;

  hr {
    width: 100%;
    border: 0px;
    border-top: 1px solid ${(props) => props.theme.color.gray_color3};
    margin-top: 14px;
    margin-bottom: 24px;
  }
`;

export const PostReplyMakeFormFileHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSize.body_medium};

  h1 {
    color: black;
  }

  p {
    color: ${(props) => props.theme.color.gray_color5};
  }
`;

export const PostReplyMakeFormFileMiddleWrap = styled.div`
  width: 100%;
  display: flex;
  column-gap: 33px;

  input[type="file"] {
    display: none;
  }
`;

export const PostReplyMakeFormFileAddLabel = styled.label`
  width: 180px;
  height: 104px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 27px;
    object-fit: scale-down;
  }
`;

export const PostReplyMakeFormFileItemWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostReplyMakeFormFileImg = styled.img`
  width: 180px;
  height: 104px;
  object-fit: cover;
  margin-bottom: 10px;
  background-color: gray;
`;

export const PostReplyMakeFormFileItemBottomWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  pre {
    font-size: ${(props) => props.theme.fontSize.body_small};
    color: ${(props) => props.theme.color.gray_color5};
    max-width: 155px;
    line-height: 16px;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }

  button {
    width: 10px;
    background: none;
    border: 0px;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    img {
      width: 100%;
      object-fit: scale-down;
    }
  }
`;
