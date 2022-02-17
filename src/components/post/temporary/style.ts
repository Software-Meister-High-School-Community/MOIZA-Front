import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.div`
  margin-top: 100px;
  > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.body_large};
    color: ${({ theme }) => theme.color.gray_color6};
  }
`;

export const ListDiv = styled.div`
  margin-top: 40px;
`;
