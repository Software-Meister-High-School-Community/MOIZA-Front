import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  margin-top: 102px;
  > li {
    display: flex;
    align-items: center;
    > img {
      margin: 0 30px;
    }
    :last-child {
      > a > p {
        color: #ffb500;
      }
      > img {
        display: none;
      }
    }
  }
`;
export const Path = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #9e9e9e;
  display: flex;
  align-items: center;
`;
