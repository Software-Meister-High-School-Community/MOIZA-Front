import styled from 'styled-components';

export const Wrapper = styled.form`
  margin-left: auto;
`
export const SearchInput = styled.label<{ width : string,heigth:string,fontsize:string }>`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 11px 12px 11px 14px;
  display: flex;
  align-items: center;
  height: ${(props)=>props.heigth}px;
  width: ${(props)=>props.width}px;
    > input {
      width: 100%;
      border: none;
      outline: none;
      background-color: transparent;
      font-style: normal;
      font-weight: normal;
      font-size: ${(props)=>props.fontsize}px;
      line-height: 19px;
      color: #999999;
    }
  >img{
    width: 17.05px;
    height: 17.05px;
  }
`