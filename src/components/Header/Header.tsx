import React, { useState } from 'react'
import * as H from './Header.styled'
import headerLogo from '../../assets/img/header/headerLogo.svg'
import categoryImg from '../../assets/img/header/categoryImg.svg'
import serchImg from '../../assets/img/header/serchImg.svg'
import profileImg from '../../assets/img/header/profileImg.svg'
import noticeImg from '../../assets/img/header/noticeImg.svg'
import Notice from './Notice'
import * as N from "./Notice/Notice.style"
import { Link } from 'react-router-dom'

const Header:React.FC = () => {

    const loginCheck = localStorage.getItem('Token');    
    const [modalState, setModalState] = useState<boolean>(false);

    const handleDisplay:any = () =>{
        let isDisplay = 'none';
        modalState  ? isDisplay ='block': isDisplay='none';
        return isDisplay
    }

    return (
      <>
        <H.Container>
            <Link to="/">
                <H.LogoImg src={headerLogo} />
            </Link>
            
            <H.CategoryContainer>
                <H.CategoryImg src={categoryImg}/>
                <H.CategoryText>카테고리</H.CategoryText>
            </H.CategoryContainer>

            <H.ItemContainer>
                <H.ItemImg src={serchImg}/>
                <H.ItemImg src={profileImg}/>

                <H.ImgContaner>
                    <H.ItemImg src={noticeImg} onClick={() => setModalState(!modalState)}/>
                    <H.Vertex isDisplay={handleDisplay}/>
                </H.ImgContaner>

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
        <Notice modalState={modalState} modalClose={()=> setModalState(!modalState)}/>
        </>
    )
}

export default Header
