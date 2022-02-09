import styled from "styled-components";

export const ImgSplitBox = styled.div<{ width: number; gap: number }>`
  width: ${(props) => props.width}px;
  display: flex;
  aspect-ratio: 16 / 9;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;

  img {
    object-fit: cover;
    background-color: gray;
  }
`;

export const ImgSplitColumnBox = styled.div<{ gap: number }>`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.gap}px;

  img {
    aspect-ratio: 16 / 9;
  }
`;

export const ImgSplitRowBox = styled.div<{ gap: number }>`
  display: flex;
  column-gap: ${(props) => props.gap}px;
`;
