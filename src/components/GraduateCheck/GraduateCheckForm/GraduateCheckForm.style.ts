import styled, { css } from "styled-components";

export const GraduateCheckFormBox = styled.div`
  width: 718px;
  height: auto;
  padding: 94px 100px;
  padding-bottom: 149px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  background-color: ${(props) => props.theme.color.gray_color1};

  input[type="file"] {
    display: none;
  }
`;

export const GraduateCheckFormTitle = styled.h1`
  color: black;
  font-size: ${(props) => props.theme.fontSize.body_large};
  font-style: normal;
  font-weight: normal;
`;

export const GraduateCheckFormInputLabel = styled.label<{ isNull: boolean }>`
  width: 100%;
  height: 39px;
  border: 1px solid ${(props) => props.theme.color.gray_color3};
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.gray_color1};
  margin-top: 64px;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${(props) =>
    props.isNull &&
    css`
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `}
`;

export const GraduateCheckFormFileAddImg = styled.img`
  width: 16px;
  object-fit: scale-down;
`;

export const GraduateCheckFormFileInfoBar = styled.div`
  width: 404px;
  height: 100%;
  background-color: ${(props) => props.theme.color.gray_color3};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 20px;
  box-sizing: border-box;
  border-radius: 20px;

  p {
    line-height: 16px;
    color: ${(props) => props.theme.color.gray_color5};
    font-size: ${(props) => props.theme.fontSize.body_small};
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const GraduateCheckFormFileSizeText = styled.p`
  color: ${(props) => props.theme.color.gray_color4};
  font-size: ${(props) => props.theme.fontSize.body_small};
  margin-left: auto;
`;

export const GraduateCheckFormFileDeleteButton = styled.button`
  width: 11px;
  height: 11px;
  border: 0px;
  background: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  margin-right: 14px;

  img {
    width: 100%;
    object-fit: scale-down;
  }
`;

export const GruduateCheckFormGuideText = styled.p`
  margin-top: 16px;
  font-size: ${(props) => props.theme.fontSize.body_small};
  color: ${(props) => props.theme.color.gray_color4};
`;
