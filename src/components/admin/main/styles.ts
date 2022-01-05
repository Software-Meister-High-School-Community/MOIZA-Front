import styled from "styled-components";

interface StyleProps {
    isSelected : boolean
    isLeft? : boolean
}

export const Wrapper = styled.section`
    width : 1200px;
    margin : 0 auto;   
`
export const Title = styled.h1`
  font-size: ${props =>props.theme.fontSize.head_small};
  font-weight: 700;
  font-family: Roboto;
  font-style: normal;
  line-height: 37.5px;
  margin-top: 123px;
  margin-left: 2px;
`
export const TypeWrapper = styled.section`
  width: 1200px;
  display: flex;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`
export const Types = styled.div`
  display: flex;
`
export const Type = styled.div`
  width: 600px;
  height: 45px;
  border-radius: ${(props:StyleProps) => props.isLeft ? "5px 0 0 0" : "0 5px 0 0"};
  background-color: ${(props:StyleProps)=> props.isSelected ? '#999999' : '#FFFFFF'};
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: ${(props:StyleProps)=> props.isSelected ? "#ffffff" : "#000000"};
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Line = styled.div`
  width: 100%;
  height: 5px;
  background: #999999;
`