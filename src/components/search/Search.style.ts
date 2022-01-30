import styled, {css} from "styled-components";

interface IStyleProps {
    disabled: boolean;
}


export const Wrapper = styled.div`
    position:relative;
    padding-top:200px;
`
export const Title  = styled.h1`
    font-size: ${(props)=>props.theme.fontSize.head_small};
    font-weight: 400;
    position: absolute;
    top: 100px;
    left: 200px;
`
export const Container = styled.form`
    display:flex;
    margin: 0 auto;
    width: 585px;
    height: 55px;
`

export const Input = styled.input`
    width: 530px;
    height: 55px;
    box-sizing:border-box;
    font-size: ${(props) => props.theme.fontSize.button_large};
    font-weight: 400;
    padding-left: 20px;
    border: solid 3px ${(props) => props.theme.color.main_blue_color};
    opacity: 55%;
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
    
    &:focus{
        opacity:100%;
        outline:none;
    }
    
    &::placeholder{
        color: ${(props) => props.theme.color.gray_color4};
    }
`

export const SubmitButton = styled.button<IStyleProps>`
    width:55px;
    height:55px;
    cursor:pointer;
    box-sizing:border-box;
    ${(props) =>
        props.disabled 
        ? css`
            opacity:100%;
        `
        : css`
            opacity:55%;
        `}
    background-color: ${(props) => props.theme.color.main_blue_color};
    border: 3px solid ${(props) => props.theme.color.main_blue_color};
    border-end-end-radius:5px;
    border-start-end-radius:5px;
`
export const Img = styled.img``

export const ItemContainer = styled.div<IStyleProps>`
    position: relative;
    width: 585px;
    background-color: ${(props) => props.theme.color.gray_color1};
    margin: 0 auto;
    padding-top: 47px;
    padding-bottom:10px;

    ${(props) =>
        props.disabled
        ? css`
            display:block;
        `
        : css`
            display:none;
        `
    }
`

export const ItemBox = styled.div`
    height: 27px;
    display:flex;
    justify-content:space-between;
    align-items: center;
    padding-left:20px;
    padding-right:20px;
    &:hover{
        background-color: ${(props) => props.theme.color.gray_color3}
    }
`

export const Item = styled.h1`
    font-size: ${(props) => props.theme.fontSize.body_small};
    font-weight:400;
`

export const DeleteBtn = styled.img`
    cursor:pointer;
`

export const Text = styled.p`
    font-size: ${(props) => props.theme.fontSize.body_small};
    color: ${(props) => props.theme.color.gray_color4};
    font-weight:400;
    position:absolute;
    top:12px;
    left:20px;
`

export const TotalDeleteBtn = styled.p`
    font-size: ${(props) => props.theme.fontSize.body_small};
    color: ${(props) => props.theme.color.gray_color4};
    font-weight:400;
    position:absolute;
    top:12px;
    right:20px;
    cursor:pointer;
`

export const SearchWrapper = styled.div`
    width:585px;
    margin: 0 auto;
`
