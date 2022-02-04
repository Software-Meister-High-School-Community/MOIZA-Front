import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 995px;
  margin: 0 auto;
  > .searchInPage {
    display: flex;
    justify-content: flex-end;
    margin: 28px 0;
  }
`
export const UserName = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
  margin-top: 70px;
`
export const SelectFollowType = styled.strong`
  display: flex;
  width: 100%;
  margin-top: 93px;
  > button {
    width: 50%;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #555555;
    padding-bottom: 31px;
    border-bottom: 1px solid #E0E0E0;
    display: flex;
    justify-content: center;
  }
  > .selected {
    border-bottom: 1px solid #0048FF;
    color: #0048FF;
  }
`