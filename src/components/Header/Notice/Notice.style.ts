import { CategoryContainer } from './../Header.styled';
import styled from "styled-components";


export const Container = styled.div`
    position:relative;
    width: 506.3px; 
`

export const NoticeForm = styled.div`
    height: 276.07px;
    border: 2px solid ${(props) => props.theme.color.gray_color3};
    border-radius:10px;
    display:flex;
    flex-direction: column;
    background-color:${(props)=> props.theme.color.gray_color1};
    overflow: auto;
    padding: 20px 0 0 20px;
`

export const Vertex = styled.div`
    position:absolute;
    top:0;
    left:20px;
      width: 0;
      height: 0;
      border-left: 15px solid transparent;
      border-right: 15px solid transparent;
      border-bottom: 15px solid ${(props)=>props.theme.color.gray_color3};   
`

export const ItemContainer = styled.div`
    width:80%;
    padding: 15px 20px 20px 20px;
    display:flex;
    align-items:center;
    border-bottom: 1px solid ${(props)=>props.theme.color.gray_color3};
    margin: 0 0 10px 0;

    &:last-child{
        border-bottom:none
    }
`

export const ItemImg = styled.img`
    width:30px;
    margin-right:10px;
`

export const ItemText = styled.p`
    font-size: ${(props) => props.theme.fontSize.body_small};
`

export const Day = styled.p`
    font-size: ${(props) => props.theme.fontSize.body_small};
    width:40px;
    font-weight:400;
`
export const Name = styled.a`
    font-size: ${(props) => props.theme.fontSize.body_small};
    font-weight:400;
`