import styled from "styled-components";

export const Wrapper = styled.section`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 25px 32px 25px 24px;
`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #DCDCDC;
    border: none;
  }
`
export const Name = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin-left: 15px;
  display:flex;
  align-items:center;
  :after{
    width: 4px;
    height: 4px;
    background: #555555;
    border-radius: 50%;
    margin-left: 25px;
    float: right;
    content: "";
  }
`
export const School = styled(Name)`
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #555555;
`
export const UserType = styled(School)`
  :after{
    width: 0;
    height: 0;
  }
`
export const ReportInfo = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`
export const ReportCount = styled.div`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  > p {
    margin-left: 25px;
    color: ${props => props.theme.color.main_blue_color};
  }
`
export const Day = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #999999;
  margin-left: 32px;
`
export const ReportMainContent = styled.div`
  display: flex;
  margin-top: 17px;
`
export const ReportContent = styled.div`
  width: 1020px;
  background-color: #F9F9F9;
  box-sizing: border-box;
  padding: 10px 12px;
  border-radius: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  color: #000000;
`
export const Buttons = styled.div`
  margin-left: 29px;
  > button {
    width: 95px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px 12px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #000000;
    background-color: #ffffff;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
  }
`