import styled from "styled-components";
import LOGO_IMG from "../../assets/img/footerLogo.png"

export const Container = styled.footer`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props)=> props.theme.color.gray_color5};
    position: absolute;
    bottom: 0;  
    `;

    export const ItemContainer  = styled.div`
    display: flex;
    width: 500px;
    align-items: center;
    justify-content: space-evenly;
    `
    
    export const LogoItem = styled.img`
    width: 130px;
    `
    
    export const TextItem = styled.div`
    font-size:${(props) => props.theme.fontSize.body_small};
    color:${(props) => props.theme.color.gray_color1};
    `