import styled,{css} from "styled-components";
interface IStyleProps {
    disabled: boolean;
}

export const Container = styled.div<IStyleProps>`
    position:absolute;
    right: 300px;
    width: 506.3px; 
    z-index:1;

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



export const ItemContainer = styled.div`
    width:80%;
    padding: 15px 20px 20px 20px;
    display:flex;
    align-items:center;
    border-bottom: 1px solid ${(props)=>props.theme.color.gray_color3};
    margin: 0 0 10px 0;
    min-height:22px;
    &:last-child{
        border-bottom:none
    }
`

export const ItemImg = styled.img`
    width:30px;
    margin-right:10px;
`

export const ItemMessage = styled.p`
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