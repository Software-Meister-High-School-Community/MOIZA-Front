import styled, {css} from "styled-components";

interface styleProps {
    disabled: boolean;
}


export const Wrapper = styled.div`
    position:relative;
    display:flex;
    justify-content:center;
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
    width: 585px;
    height: 55px;
    position: absolute;
    padding-top:200px;
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

export const SubmitButton = styled.button<styleProps>`
    width:55px;
    height:55px;
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