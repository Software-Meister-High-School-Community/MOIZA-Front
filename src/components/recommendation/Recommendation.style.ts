import styled from "styled-components";
interface IStyleProps {
    backgroundColor: any
}
export const Wrapper = styled.div`
    position: relative;
    width:1200px;
    margin: 0 auto;
`
export const Phrases = styled.p`
    font-weight:400;
    position: absolute;
    top:50px;
    font-size:${(props) => props.theme.fontSize.button_large};
    color: ${(props)=> props.theme.color.gray_color4};
`
export const ItemContainer = styled.div`
    width:1200px;
    display:flex;
    flex-wrap:wrap;
    padding-top:123px;
    gap:30px;
`
export const ItemBox = styled.div<IStyleProps>`
    position:relative;
    box-sizing:border-box;
    padding-left:30px;
    width: 380px;
    height: 380px;
    background-color:${(props)=>props.backgroundColor};
    border-radius: 10px;
    cursor:pointer;
`

export const ItemImg = styled.img`
    position:absolute;
    top:30px;
`
export const Date = styled.p`
    position:absolute;
    top:334px;
    color:${(props)=>props.theme.color.gray_color1};
`
export const User = styled.p`
    position:absolute;
    color: ${(props) => props.theme.color.gray_color1};
    top: 304px;
    font-weight:400;
`
export const ItemTitle = styled.h1`
    position:absolute;
    color:${(props)=> props.theme.color.gray_color1};
    font-size:24px;
    font-weight:700;
    width: 200px;
    top:218px;
` 
export const AddBtn = styled.button`
    background: ${(props)=>props.theme.color.gray_color1};
    border: 1px solid ${(props)=>props.theme.color.gray_color4};
    width: 96px;
    height: 47px;
    display:block;
    margin: 137px auto;
    cursor:pointer;
    box-sizing: border-box;
`