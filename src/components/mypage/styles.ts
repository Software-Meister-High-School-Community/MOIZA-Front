import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
`
export const UserColorBox = styled.div<{
    color : string;
}>`
  width: 100%;
  height: 348px;
  background-color: ${(props)=>props.color};
`