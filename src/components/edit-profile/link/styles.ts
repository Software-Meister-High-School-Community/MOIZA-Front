import styled from 'styled-components'

export const LinkList = styled.ul`
  width: 100%;
  margin-top: 13px;
  > button,input {
    width: 100%;
    height: 38px;
    margin-bottom: 10px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
  }
  > .writeLink {
    padding: 11px 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  > .addLink {
    background: #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      margin-right: 6.17px;
    }
  }
`