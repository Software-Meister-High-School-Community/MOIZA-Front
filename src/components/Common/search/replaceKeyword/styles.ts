import styled from 'styled-components'

export const Wrapper = styled.p<{
    color : string;
    margin : boolean;
}>`
  display: flex;
  > p {
    color : ${(props)=>props.color};
  }
`