import React from 'react'
import { Container, LogoImg, CategoryContainer , CategoryImg , CategoryText, ItemContainer, ItemImg, AuthContainer, AuthText } from './Header.styled.ts'
import headerLogo from '../../assets/img/header/headerLogo.svg'
import categoryImg from '../../assets/img/header/categoryImg.svg'
import serchImg from '../../assets/img/header/serchImg.svg'
import profileImg from '../../assets/img/header/profileImg.svg'
import noticeImg from '../../assets/img/header/noticeImg.svg'
const Header = () => {

    const loginCheck = localStorage.getItem('Token')

    const handleMouseEnter = (e) =>{
        console.log(e)
    }

    return (
        <Container>
            <LogoImg src={headerLogo}/>
            
            <CategoryContainer>
                <CategoryImg src={categoryImg}/>
                <CategoryText>카테고리</CategoryText>
            </CategoryContainer>

            <ItemContainer>
                <ItemImg src={serchImg}/>
                <ItemImg src={profileImg}/>
                <ItemImg src={noticeImg}/>
            </ItemContainer>

            <AuthContainer>
                {
                    loginCheck ?
                    <>
                    <AuthText>회원가입</AuthText>
                    |
                    <AuthText>로그인</AuthText>
                    </>
                    : 
                    <AuthText>로그아웃</AuthText>
                }
            </AuthContainer>
        </Container>
    )
}

export default Header
