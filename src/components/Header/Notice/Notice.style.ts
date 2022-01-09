import styled, { StyledProps } from "styled-components";

interface StyleProps{
    isDisplay:string
}

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
    display:${(props:StyleProps) => props.isDisplay};
    position:absolute;
    top:53px;
    right:32%;
    z-index:2;
    width:14px;
    height:14px;
    background-color:${(props)=>props.theme.color.gray_color1};
    border-top:2px solid ${(props) => props.theme.color.gray_color3};
    border-left:2px solid ${(props) => props.theme.color.gray_color3};
    transform: rotate(45deg);
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