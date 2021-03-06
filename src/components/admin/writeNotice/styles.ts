import styled from "styled-components";

export const Wrapper = styled.section`
  width: 1200px;
  margin: 0 auto;
`
export const InputContentBox = styled.form`
  background-color: #ffffff;
  margin-top: 73px;
  width: 100%;
  height: 800px;
  box-sizing: border-box;
  padding: 76px 100px 56px 110px;
  > strong {
    display: flex;
    justify-content: flex-end;
    margin: 25px 0;
    > p {
      margin-right: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      color: #000000;
    }
  }
`
export const Title = styled.strong`
  display: flex;
  align-items: center;
  > p {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  > label {
        width: 924px;
        display: flex;
        background-color: #F9F9F9;
        border: 1px solid #E0E0E0;
        border-radius: 5px;
        margin-left: 12px;
    align-items: center;
      >input {
        border: none;
        outline: none;
        background-color: transparent;
        width: 874px;
        height: 40px;
        box-sizing: border-box;
        padding: 9px 0 10px 15px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #555555;
      }
  }
`
export const NoticeMainContent = styled.textarea`
  background: #F9F9F9;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 100%;
  height: 489px;
  resize: none;
  padding: 20px 20px 28px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #555555;
`
export const PostOptionalFunction = styled.section`
  display: flex;
`
export const SubmitBtn = styled.section`
  > button {
    margin: 148px auto 115px auto;
  }
`
export const TextCount = styled.div<{ marginTop?: string }>`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #999999;
  margin-top: ${(props) => props.marginTop};
`