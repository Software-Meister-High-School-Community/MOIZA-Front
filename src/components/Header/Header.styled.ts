import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyleProps{
    isDisplay:string
}

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 60px;
    background-color: ${(props) => props.theme.color.gray_color1};
`
export const StyleLink = styled(Link)`
      text-decoration: none;
      color:${(props) => props.theme.color.gray_color6};
      cursor: pointer;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`

export const LogoImg = styled.img`
`

export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 94px;
    justify-content: space-evenly;
`

export const CategoryImg = styled.img`
    width: 24px;
`
export const CategoryText = styled.p`
    font-size: ${(props) => props.theme.fontSize.body_medium};
    text-decoration:none;
`
export const ItemContainer = styled.div`
    display: flex;
    width: 270px;
    justify-content:space-between;
`

export const ItemImg = styled.img`
    cursor: pointer;
`
export const AuthContainer = styled.div`
    display: flex;
    width: 120px;
    justify-content:space-between;
`

export const AuthText = styled.a`
    font-size:${(props)=> props.theme.fontSize.body_medium};
    cursor: pointer;
`
export const ImgContaner = styled.div`
    position:relative;
`


export const Vertex = styled.div`
    position:absolute;
    top:35px;
    display:${(props:StyleProps) => props.isDisplay};
    z-index:2;
    width:14px;
    height:14px;
    background-color:${(props)=>props.theme.color.gray_color1};
    border-top:2px solid ${(props) => props.theme.color.gray_color3};
    border-left:2px solid ${(props) => props.theme.color.gray_color3};
    transform: rotate(45deg);
`