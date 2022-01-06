import React from 'react'
import LOGO_IMG from "../../assets/img/logo/white모이자.svg"

import {Container,ItemContainer,LogoItem,TextItem} from "./Footer.style.ts"

const Footer = () => {
    return (
        <Container>
            <ItemContainer>
                <LogoItem src={LOGO_IMG}></LogoItem>
                <TextItem>이용약관&nbsp;&nbsp; | &nbsp;&nbsp;개인정보처리방침</TextItem>
            </ItemContainer>
            <ItemContainer>
                <TextItem>©2022. 팀이름. All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;</TextItem>
                <TextItem>sofmoiza@gmail.com</TextItem>
            </ItemContainer>
        </Container>
    )
}

export default Footer
