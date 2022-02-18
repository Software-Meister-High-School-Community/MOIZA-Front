import styled from 'styled-components'

export const ColorList = styled.ul`
  width: 756px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 13px;
`
export const EachColorBox = styled.li<{backgroundcolor:string}>`
  width: 70px;
  height: 70px;
  border-radius: 5px;
  border: 1px solid #E0E0E0;
  margin: 0 38px 30px 0;
  box-sizing: border-box;
  background-color: ${(props)=>props.backgroundcolor};
`