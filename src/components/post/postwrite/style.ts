import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const WriteForm = styled.form`
  background-color: #ffffff;
  margin-top: 59px;
  width: 100%;
  height: 850px;
  box-sizing: border-box;
  padding: 76px 100px 56px 110px;
`;

export const RadioDiv = styled.div`
  width: 955px;
  margin-top: 30px;
  margin-left: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  > p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.body_large};
    color: ${({ theme }) => theme.color.gray_color6};
  }
  > label {
    width: 924px;
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.color.gray_color3};
    border-radius: 5px;
    margin-left: 28px;
    > input {
      border: none;
      outline: none;
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
`;

export const TextCount = styled.div<{ marginTop?: string }>`
  font-style: normal;
  font-family: "Roboto", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #999999;
  margin-top: ${(props) => props.marginTop};
`;

export const PostMainContent = styled.textarea`
  margin-top: 24px;
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  width: 995px;
  height: 489px;
  resize: none;
  padding: 20px 20px 28px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #555555;
  outline: none;
`;

export const TempList = styled.p`
  font-family: "Roboto", sans-serif;
  color: ${({ theme }) => theme.color.gray_color5};
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.button_small};
  line-height: 19px;
  text-align: right;
  text-decoration: underline;
  cursor: pointer;
`;

export const SubmitBtn = styled.section`
  display: flex;
  justify-content: center;
  > button {
    margin: 148px 25px 115px 25px;
  }
`;
