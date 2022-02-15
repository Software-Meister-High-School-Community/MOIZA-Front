import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    width:1200px;
    height:292px;
    margin: 0 auto;
    margin-bottom:98px;
`
export const Title = styled.h1`
    font-size: 20px;
    font-weight:400;
`
export const Container = styled(Slider)`
    display:flex;
    width:1200px;
    gap: 30px;
    margin-top:20px;
`
export const ItemBox = styled.div`
    position:relative;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    width:175px;
    height: 249px;
    background-color: ${(props) => props.theme.color.gray_color1};
    border-radius: 11px;
`

export const Img = styled.img`
   width:100px;
   height:100px;
`

export const StudentType = styled.h3`
    
    color: ${(props) => props.theme.color.gray_color5};
    font-size: ${(props) => props.theme.fontSize.body_small};

`

export const SchoolName = styled.h2`
    color: ${(props) => props.theme.color.gray_color6};
    font-size: ${(props) => props.theme.fontSize.body_medium};
`
export const Name = styled.h2`
    color: ${(props) => props.theme.color.gray_color6};
    font-size: ${(props) => props.theme.fontSize.body_medium};
`

export const ButtonBox = styled.div`
    position:absolute;
    top:0px;
    right:0px;
    width:48px;
    height:17px;
    display:flex;
    justify-content:space-between;
    `
export const prevButton = styled.img`
    position:absolute;
    right:60px;
    cursor:pointer;
`

export const NextButton = styled.img` 
    position:absolute;
    right:30px;
    cursor:pointer;
`