import styled from "styled-components";

export const FindIdFormBox = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
`;

export const FindIdTitle = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: ${(props) => props.theme.fontSize.head_small};
  color: black;
  margin-right: auto;
`;
