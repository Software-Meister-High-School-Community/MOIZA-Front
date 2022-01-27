import styled from "styled-components";

export const Wrapper = styled.section`
`
export const Types = styled.div`
  display: flex;
  margin: 41px 0 30px 0;
  > form {
    margin-left: auto;
  }
`
export const Type = styled.label`
  display: flex;
  margin-right: 55px;
  align-items: center;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;

  >div{
    width: 20px;
    height: 20px;
    border: 1px solid #E0E0E0;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
      > input {
        margin: 0;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        vertical-align: middle;
        border: none;
        appearance: none;
        -webkit-appearance: none;
        outline: none;
        cursor: pointer;
        :checked{
          background-color: ${props => props.theme.color.main_yellow_color};
        }
      }
  }
  > p {
    margin-left: 10px;
  }
`
export const SearchInput = styled.label<{ width : string }>`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 11px 12px 11px 14px;
  display: flex;
  height: 40px;
  width: ${(props)=>props.width}px;
    > input {
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #999999;

    }
`