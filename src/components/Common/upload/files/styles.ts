import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 28px;
  width: 100%;
  height: 240px;
  box-sizing: border-box;
  padding: 24px 35px;
  background-color: #ffffff;
`
export const Header = styled.header`
  display: flex;
  padding-bottom: 14px;
  border-bottom: 1px solid #E0E0E0;
  > h1,p {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
  }
  > p {
    margin-left: auto;
  }
`
export const Files = styled.ul`
  display: flex;
  margin-top: 24px;
`
export const PreView = styled.li`
  > img {
    width: 180px;
    height: 104px;
    border: 1px solid #0048FF;
  }
  margin-right: 29px;
`
export const ImgInfo = styled.div`
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #555555;
  > p {
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > button {
    margin-left: auto;
  }
`
export const AddFileButton = styled.label`
  > img {
    padding: 38px 77px;
    background-color: #ffffff;
    border: 1px solid #E0E0E0;
  }
  > input {
      width: 0;
      height: 0;
  }
`