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
`;

export const PostReplyMakeFormFileItemWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostReplyMakeFormFileImg = styled.img`
  width: 180px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const PostReplyMakeFormFileItemBottomWrap = styled.div`
  display: flex;
  align-items: center;

  pre {
    font-size: ${(props) => props.theme.fontSize.body_small};
    color: ${(props) => props.theme.color.gray_color5};
  }

  button {
    width: 10px;
    height: 10px;
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
