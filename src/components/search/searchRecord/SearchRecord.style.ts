import styled,{css} from "styled-components";

interface IStyleProps {
    disabled: boolean;
}

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