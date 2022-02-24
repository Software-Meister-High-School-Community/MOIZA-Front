import styled, {css} from "styled-components";

interface IStyleProps {
    disabled: boolean;
}


export const Wrapper = styled.div`
    position:relative;
    margin: 0 auto;
    height:288px;
    width: 1200px;
    padding-top:100px;
`
export const Title  = styled.h1`
    font-size: ${(props)=>props.theme.fontSize.head_small};
    font-weight: 400;
`
export const Container = styled.form`
    display:flex;
    width: 585px;
    height: 55px;
    margin: 45px auto 0 auto;
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


export const SearchWrapper = styled.div`
    width:585px;
    margin: 0 auto;
`
