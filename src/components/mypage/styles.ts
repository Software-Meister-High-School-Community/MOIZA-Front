import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
  > .pageNation{
    margin: 134px 0 375px 0;
  }
`
export const UserColorBox = styled.div<{
    color : string;
}>`
  width: 100%;
  height: 348px;
  background-color: ${(props)=>props.color};
`