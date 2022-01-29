import React from 'react';
import * as S from './styles';
import OutsideClickHandler from 'react-outside-click-handler';

interface PropsType {
    setModalStatus : (status : boolean) => void
}

const SeeMoreModal:React.FC<PropsType> = ({setModalStatus}) => {
    return (
        <OutsideClickHandler onOutsideClick={()=>setModalStatus(false)}>
            <S.Wrapper>
                <S.Option>수정</S.Option>
                <S.Option>삭제</S.Option>
            </S.Wrapper>
        </OutsideClickHandler>
    )
}
export default SeeMoreModal