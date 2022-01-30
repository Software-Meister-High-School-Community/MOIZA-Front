import styled from "styled-components";

export const EyeButtonBox = styled.div<{ left?: number }>`
  position: absolute !important;
  width: 18px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0px;
  background: none;
  outline: none;
  padding: 0px;
  cursor: pointer;
  top: 50%;
  ${(props) => (props.left ? `left : ${props.left}px` : `right : 11px`)};

  transform: translate(0%, -50%);
`;

export const EyeButtonImg = styled.img`
  width: 100%;
  object-fit: scale-down;
`;
