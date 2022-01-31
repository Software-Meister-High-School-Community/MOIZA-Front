import styled from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 60px;
`
export const Options = styled.section`
  display: flex;
  > .radios{
    margin-left: auto;
  }
  > .dropdownWrapper {
    margin: 0;
    :last-child {
      margin-left: 32px;
    }
  }
`
export const Title = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  display: flex;
  > p {
    color : #0048FF;
  }
`
export const List = styled.ul`
  margin-top: 50px;
`