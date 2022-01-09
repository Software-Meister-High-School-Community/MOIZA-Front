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

export const LogoImg = styled.img`
    width: 120px;
`

export const CategoryContainer = styled.div`
    display: flex;
    align-items: center;
    height: 30px;
    width: 185px;
    justify-content: space-evenly;
`

export const CategoryImg = styled.img`
    width: 24px;
`
export const CategoryText = styled.p`
    font-size: ${(props) => props.theme.fontSize.body_medium};
    `
export const ItemContainer = styled.div`
    display: flex;
    width: 270px;
    justify-content:space-between;
`

export const ItemImg = styled.img`
    width: 24px;
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
    top:40px;
    display:${(props:StyleProps) => props.isDisplay};
    z-index:2;
    width:14px;
    height:14px;
    background-color:${(props)=>props.theme.color.gray_color1};
    border-top:2px solid ${(props) => props.theme.color.gray_color3};
    border-left:2px solid ${(props) => props.theme.color.gray_color3};
    transform: rotate(45deg);
`