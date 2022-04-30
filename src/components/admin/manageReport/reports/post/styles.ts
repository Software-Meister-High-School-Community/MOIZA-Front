import styled from "styled-components";

export const Wrapper = styled.section`
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 5px;
  padding: 13px 26px 13px 26px;
  display: flex;
  margin-top: 10px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 13px;
  > img {
    margin-right: 16px;
  }
`
export const Info = styled.div`
  display: flex;
  margin: 23px 0 0 19px;
`
export const Name = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  display:flex;
  align-items:center;
  margin-left:22px;
  :after {
    margin-left: 22px;
    width: 3px;
    height: 3px;
    background-color: #000000;
    border-radius: 50%;
    float: right;
    content: "";
  }
`
export const UserType = styled(Name)`
  :after{
    width: 0;
    height: 0;
  }
`
export const Details = styled.div`
  margin-left: auto;
`
export const Top = styled.div`
  display: flex;
  > p {
    width: 90px;
    margin-right: 57px;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    display: flex;
    align-items: center;
    color: #999999;
  }
`
export const Bottom = styled.div`
  display: flex;
  margin-top: 4px;
  > div{
    display: flex;
    align-items: center;
    width: 90px;
    margin-right: 57px;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    > p {
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0em;
      text-align: right;
      color: ${props => props.theme.color.main_blue_color};
      margin-left: 25px;
    }
  }
`
export const Button = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid #E0E0E0;
  background-color: #ffffff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
`