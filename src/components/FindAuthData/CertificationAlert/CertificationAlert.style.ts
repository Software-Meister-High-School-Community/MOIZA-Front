import styled from "styled-components";

export const CertificationAlertBox = styled.div`
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
