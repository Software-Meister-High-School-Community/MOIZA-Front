import styled from "styled-components";

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

export const AuthText = styled.button`
    font-size:${(props)=> props.theme.fontSize.body_medium};
    cursor: pointer;
`