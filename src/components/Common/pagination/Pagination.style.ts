import styled from "styled-components";

export const Container = styled.div `
    width:305px;
    height: 30px;
    display:flex;
    align-items:center;
    margin: 0 auto;
`

export const Number = styled.button`
    /* background-color: */ 
    font-size:${(props) => props.theme.fontSize.body_large};
    font-weight:400;
`

