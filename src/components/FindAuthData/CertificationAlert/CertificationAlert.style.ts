import styled, { css } from "styled-components";

export const CertificationAlertBox = styled.div<{ isPwSend: boolean }>`
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;

  ${(props) =>
    props.isPwSend &&
    css`
      margin-bottom: 139px;
      position: relative;
    `}
`;

export const CertificationAlertImg = styled.img`
  width: 76px;
  object-fit: scale-down;
`;

export const CertificationAlertText = styled.p`
  color: ${(props) => props.theme.color.gray_color5};
  font-size: 48px;
  margin-left: 30px;
  font-style: normal;
  font-weight: normal;
  strong {
    font-weight: normal;
    color: black;
  }
`;

export const CertificationPwGuideText = styled.p`
  color: ${(props) => props.theme.color.gray_color5};
  font-size: ${(props) => props.theme.fontSize.body_large};

  strong {
    color: ${(props) => props.theme.color.main_blue_color};
  }
  position: absolute;
  top: 100px;
  text-align: center;
  font-style: normal;
  font-weight: normal;
  line-height: 25px;
`;
