import styled from "styled-components";

interface StyleProps {
  isOpen: boolean
}

export const Wrapper = styled.section<StyleProps>`
  border-radius: 5px;
  height:${(props) => props.isOpen ? "130" : "60"}px;
  border: 1px solid #E0E0E0;
  background-color: #FFFFFF;
  margin-top: 10px;
`
export const Summary = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`
export const UserInfo = styled.div`
  display: flex;
  margin-left: 26px;
`
export const Name = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  margin-right: 14px;
  display:flex;
  align-items:center;
  :after {
    margin-left: 13px;
    width: 3px;
    height: 3px;
    background-color: #000000;
    border-radius: 50%;
    float: right;
    content: "";
  }
`
export const Type = styled(Name)`
  :after {
    width: 0;
    height: 0;
  }
`
export const History = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 29px;
`
export const Progress = styled.em`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #EB4D3D;
  margin-right : 40px;
  > p {
    font-size: 18px;
  }
`
export const Count = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  >p {
    margin-left: 25px;
    color: ${props => props.theme.color.main_blue_color};
  }
`
interface ArrowType {
  isFold: boolean
}
export const Arrow = styled.img<ArrowType>`
  margin-left: 54px;
  transition: all ease 300ms;
  transform: rotate(${(props) => props.isFold ? "180" : "0"}deg);
  cursor: pointer;
`

export const DetailWrapper = styled.section`
`
export const Line = styled.div`
  margin-top: 4px;
  border-top: 1px solid #E0E0E0;
`

export const Details = styled.div`
  display: flex;
  margin-left: 26px;
  height: 69px;
  align-items: center;
`
export const ReportCount = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #555555;
  display: flex;
  align-items: center;
  margin-right: 70px;
  > p {
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
    color: ${props => props.theme.color.main_blue_color};
    margin-left: 20px;
  }
  :last-child{
    margin-right: 35px;
  }
`
export const HeigthLine = styled.div`
  border-right: 1px solid #E0E0E0;
  height: 100%;
`
export const UserFreeze = styled.div`
  margin: 0 73px 0 68px;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  display: flex;
  align-items: center;
  > input[type="number"] {
    width: 60px;
    height: 30px;
    background-color: #E0E0E0;
    border: none;
    margin: 0 6px 0 17px;
    outline: none;
    box-sizing: border-box;
    padding: 4px 13px 5px 15px;
    text-align: right;
    ::-webkit-outer-spin-button,::-webkit-inner-spin-button{
      margin: 0;
      appearance: none;
    }
  }
  > button {
    width: 62px;
    height: 40px;
    background-color: #ffffff;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    border: 1px solid #E0E0E0;
    border-radius: 5px;
    margin-left: 49px;
    box-sizing: border-box;
    padding: 10.5px 14px;
    cursor: pointer;
  }
`

export const RemoveUser = styled.button`
  width: 158px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #E0E0E0;
  background-color: #ffffff;
  margin: 0 0 0 77px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  cursor: pointer;
`