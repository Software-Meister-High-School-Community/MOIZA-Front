import styled from "styled-components";

export const Wrapper = styled.section`
  width: 140px;
  box-sizing: border-box;
  position: absolute;
  top: 340px;
  right: 232px;
  border: 1px solid #999999;
  background-color: #ffffff;
  z-index: 99;
`;
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
  :after {
    content: "";
    width: 131.6px;
    border-bottom: 1px solid #e0e0e0;
    position: absolute;
  }
  :last-child {
    :after {
      width: 0;
      height: 0;
    }
  }
`;
