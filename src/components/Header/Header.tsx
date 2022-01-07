import React from 'react'
import * as H from './Header.styled'
import headerLogo from '../../assets/img/header/headerLogo.svg'
import categoryImg from '../../assets/img/header/categoryImg.svg'
import serchImg from '../../assets/img/header/serchImg.svg'
import profileImg from '../../assets/img/header/profileImg.svg'
import noticeImg from '../../assets/img/header/noticeImg.svg'
const Header = () => {

    const loginCheck = localStorage.getItem('Token');
    console.log(loginCheck);

    return (
        <H.Container>
            <H.LogoImg src={headerLogo}/>
            
            <H.CategoryContainer>
                <H.CategoryImg src={categoryImg}/>
                <H.CategoryText>카테고리</H.CategoryText>
            </H.CategoryContainer>

            <H.ItemContainer>
                <H.ItemImg src={serchImg}/>
                <H.ItemImg src={profileImg}/>
                <H.ItemImg src={noticeImg}/>
            </H.ItemContainer>

            <H.AuthContainer>
                {
                    loginCheck ? 
                    <H.AuthText>로그아웃</H.AuthText>
                    : 
                    <>
                    <H.AuthText>회원가입</H.AuthText>
                    |
                    <H.AuthText>로그인</H.AuthText>
                    </>
            
                }
            </H.AuthContainer>
        </H.Container>
    )
}

export default Header
