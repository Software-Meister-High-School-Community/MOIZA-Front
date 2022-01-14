import styled from 'styled-components'

export const Wrapper = styled.ul`
  margin-top: 27px;
`
export const List = styled.li<{
    fixed : boolean
}>`
  width: 1200px;
  height: 65px;
  box-sizing: border-box;
  padding: 20px 23px 20px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 13px;
  display: flex;
  align-items: center;
  > h1 {
    margin-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${(props)=>props.fixed ? "#FFB500" : "#555555"};
  }
`
export const Views = styled.em`
  margin-left: auto;
  display: flex;
  align-items: center;
  > span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
    margin-left: 6px;
  }
`
export const Hearts = styled(Views)`
  margin-left: 34px;
  > span {
    margin-left: 7px;
  }
`
export const SeeMore = styled.img`
  margin-left: 37px;
`