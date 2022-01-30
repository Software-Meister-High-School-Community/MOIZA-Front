import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 140px;
  height: 90px;
  box-sizing: border-box;
  position: absolute;
  top: 10.5px;
  right: 0;
  border: 1px solid #999999;
  background-color: #ffffff;
  z-index: 99;
`
export const Option = styled.button`
  width: 100%;
  height: 45px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 14px;
  color: #000000;
  border: none;
  background-color: transparent;
  padding: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :nth-child(1){
    :after{
      content: "";
      width: 131.6px;
      border-bottom: 1px solid #E0E0E0;
      position: absolute;
      top: 50%;
    }
  }
`