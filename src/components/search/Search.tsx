import React, { useRef, useState } from 'react'
import SearchResult from './SearchRecord'
import * as S from './Search.style'
import OutsideClickHandler from 'react-outside-click-handler'
import * as IMGS from '../../assets/img/index'

const Search: React.FC = () => {

    const searchEl = useRef(null);
    const [disabled , setDisabled] = useState(false);
    const [visible , setVisble] = useState(false);


    return (
        <>

            <S.Title>검색</S.Title>
        <S.Wrapper>
        <S.SearchWrapper>

        <OutsideClickHandler onOutsideClick={() => {
            { setVisble(false); }
        }}>
            <S.Container>
                <S.Input ref={searchEl}  autoFocus
                onFocus={() => {
                    setDisabled(true)
                    setVisble(true)
                }}
                onBlur={() => setDisabled(false)}
                placeholder='검색어를 입력하세요'/>
                    <S.SubmitButton disabled={disabled} >
                        <S.Img src={IMGS.SearchLogo}/>
                    </S.SubmitButton>
            </S.Container>
            <SearchResult visible={visible}/>
        </OutsideClickHandler> 
        </S.SearchWrapper>
        </S.Wrapper>
        </>
    )
}

export default Search
