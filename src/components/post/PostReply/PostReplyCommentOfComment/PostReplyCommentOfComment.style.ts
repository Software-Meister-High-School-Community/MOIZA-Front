import styled from "styled-components";

export const PostReplyCOCBox = styled.div`
  //comment of comment
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};
  border-radius: 5px;
  margin-bottom: 20px;
`;
export const PostReplyCOCInputWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input[type="file"] {
    display: none;
  }

  p {
    font-size: 12px;
    color: ${(props) => props.theme.color.gray_color4};
  }
`;

export const PostReplyCOCtextInputWrap = styled.div`
  width: 100%;
  display: flex;
  margin-top: 8px;
`;

export const PostReplyCOCTextarea = styled.textarea`
  width: 100%;
  min-height: 78px;
  resize: none;
  background-color: ${(props) => props.theme.color.gray_color2};
  border: 0px;
  outline: none;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 16px 13px;
  font-size: ${(props) => props.theme.fontSize.body_medium};
  line-height: 23px;
  font-style: normal;
  font-weight: normal;
`;

export const PostReplyCOCSubmitButton = styled.button`
  min-width: 73px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSize.body_small};
  border-radius: 5px;
  border: 0px;
  outline: none;
  cursor: pointer;
  background-color: ${(props) => props.theme.color.main_yellow_color};
  margin-left: 14px;
  color: ${(props) => props.theme.color.gray_color1};
  font-weight: bold;
`;

export const PostReplyCOCFileInputLabel = styled.label`
  width: 87px;
  height: 26px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.gray_color4};
  margin-top: 16px;
  cursor: pointer;
  column-gap: 6px;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray_color1};

  strong {
    font-weight: bold;
  }

  img {
    width: 13px;
    object-fit: scale-down;
  }
`;

export const PostReplyCOCImgBox = styled.div`
  display: flex;
  margin-top: 16px;
`;

export const PostReplyCOCImgWrap = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 180px;
    height: 104px;
    object-fit: cover;
  }
`;

export const PostReplyCommentWrap = styled.div``;
