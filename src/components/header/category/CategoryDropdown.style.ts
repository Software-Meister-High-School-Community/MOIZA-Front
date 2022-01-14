import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 94px;
  display: inline-block;
`

export const Line = styled.div`
    display:none;
    width: 24px;
    height: 4px;
    background-color: ${(props) => props.theme.color.main_blue_color};
    border-radius:4px;
    position:absolute;
    top: 45px;
    left:50px;

    ${Wrapper}:hover &{
        display:block;
    }
`

export const Container = styled.div`
  width:94px;
  display:flex;
  justify-content: space-evenly;
  align-items:center;
  padding: 20px;
  font-size: 16px;
  border: none;
`

export const Img = styled.img`
`
export const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSize.body_small};
`

export const ItemContainer = styled.div`
  display: none;
  position: absolute;
  background-color: ${(props) => props.theme.color.gray_color1};
  min-width: 160px;
  z-index: 1;
  
  ${Wrapper}:hover &{
      display:block
    }
`

export const Item = styled.div`
    width:185px;
    height: 43px;
    display:flex;
    padding-left:30px;
    align-items:center;
    box-sizing:border-box;
    
    &:hover{
        background-color:${(props) => props.theme.color.gray_color3};
    }
`