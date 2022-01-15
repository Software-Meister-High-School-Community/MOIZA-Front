import styled from "styled-components";

export const Wrapper = styled.ul`
  display: flex;
  > li {
    display:flex;
    > img {
      margin: 0 30px;
    }
    :last-child{
      > a > p {
        color: #FFB500;
      }
      > img{
        display: none;
      }
    }
  }
`
export const Path = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #9E9E9E;
  display:flex;
  align-items:center;
`