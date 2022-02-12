import styled from 'styled-components';

export const Wrapper = styled.ul`
  
`
export const UserInfoBox = styled.li`
  width: 100%;
  height: 98px;
  box-sizing: border-box;
  padding: 21px 18px 22px 24px;
  display: flex;
  background: #FFFFFF;
  border-radius: 5px;
  > .profile{
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #C4C4C4;
  }
`
export const Names = styled.strong`
  margin: 11px 0 0 23px;
  color: #000000;
  font-style: normal;
  font-weight: normal;
  > .username {
    font-size: 16px;
    line-height: 19px;
  }
  > .schoolname {
    font-size: 12px;
    line-height: 14px;
  }
`
export const Buttons = styled.section`
  display: flex;
  margin-left: auto;
  align-items: center;
  > button {
    width: 80px;
    height: 44px;
    border-radius: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    margin-left: 12px;
    cursor: pointer;
  }
  >.f4f{
    background-color: #0048FF;
    color: #FFFFFF;
  }
  > .removefollowing {
    background-color: #FFFFFF;
    color: #999999;
    border: 1px solid #E0E0E0;
  }
  > .following {
    background-color: #ffffff;
    color: #555555;
    border: 1px solid #E0E0E0;
  }
`