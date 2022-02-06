import styled from "styled-components";

export const ImgSplitBox = styled.div<{ width: number }>`
  width: ${(props) => props.width}px;
  display: flex;
  aspect-ratio: 16 / 9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-color: gray;
  }
`;

export const ImgSplitColumnBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImgSplitRowBox = styled.div`
  display: flex;
`;
