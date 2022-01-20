import React, { useEffect, useRef, useState } from 'react'
import SerchResult from './SerchResult'
import * as S from './serch.style'
import SerchImg from '../../assets/img/serch/serchLogo.svg'

const Serch: React.FC = () => {

    const serchEl = useRef(null);
    const [disabled , setDisabled] = useState(false);
    const [visible , setVisble] = useState(true);

    return (
        <>
            <S.Title>검색</S.Title>
        <S.Wrapper onClick={(e)=> console.log(e.target)}>
            <S.Container>
                <S.Input ref={serchEl} autoFocus 
                onFocus={() => setDisabled(true)}
                onBlur={() => setDisabled(false)}
                placeholder='검색어를 입력하세요'/>
                    <S.SubmitButton disabled={disabled} >
                        <S.Img src={SerchImg}/>
                    </S.SubmitButton>
            </S.Container>
            <SerchResult visible={visible}/>
        </S.Wrapper>
        </>
    )
}

export default Serch
