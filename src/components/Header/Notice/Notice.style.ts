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
    align-items:center;
    background-color:${(props)=> props.theme.color.gray_color1};
    overflow: auto;
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
    padding:20px;
    display:flex;
    align-items:center;
    border-bottom: 1px solid ${(props)=>props.theme.color.gray_color3};
    margin: 10px 0 10px 0;

    &:last-child{
        border-bottom:none
    }
`

export const ItemImg = styled.img`
    width:30px;
    margin-right: 20px;
`

export const ItemText = styled.p`
    font-size: ${(props) => props.theme.fontSize.body_medium};
`

export const Day = styled.p`
    width:20px
`