import React, { useEffect, useRef, useState } from 'react'
import * as S from './serch.style'
import Img from '../../assets/img/serch/serchLogo.svg'

const Serch: React.FC = () => {

    const serchEl = useRef(null);
    const [disabled , setDisabled] = useState(false);


    return (
        <S.Wrapper>
            <S.Title>검색</S.Title>
            <S.Container>
                <S.Input ref={serchEl} autoFocus onFocus={() => setDisabled(true)} onBlur={() => setDisabled(false)} placeholder='검색어를 입력하세요'/>
                    <S.SubmitButton disabled={disabled}>
                        <S.Img src={Img}/>
                    </S.SubmitButton>
            </S.Container>
        </S.Wrapper>
    )
}

export default Serch
