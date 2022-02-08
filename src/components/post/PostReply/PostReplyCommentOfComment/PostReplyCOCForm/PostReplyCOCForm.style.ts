import styled from "styled-components";

export const PostReplyCOCFormWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostReplyCOCFormHeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PostReplyCOCFormHeaderText = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-style: normal;
  font-weight: normal;

  span {
    color: ${(props) => props.theme.color.gray_color5};
    strong {
      color: black;
    }
  }
`;

export const PostReplyCOCFormHeaderDate = styled.pre`
  color: ${(props) => props.theme.color.gray_color4};
  font-size: 12px;
  font-style: normal;
  font-weight: normal;
`;

export const PostReplyCOCFormBreakPoint = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 100px;
  background-color: ${(props) => props.theme.color.gray_color5};
  margin: 0px 6px;
`;

export const PostReplyCOCFormText = styled.pre`
  width: 100%;
  height: auto;
  font-size: ${(props) => props.theme.fontSize.body_medium};
  margin-bottom: 18px;
  line-height: 24px;
  color: ${(props) => props.theme.color.gray_color5};
  font-style: normal;
  font-weight: normal;
`;
