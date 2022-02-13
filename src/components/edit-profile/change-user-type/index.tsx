import React from 'react';
import * as S from './styles';

const ChangeUserType:React.FC = () => {
    return (
        <>
            <S.ChangeUserTypeButton>졸업생 인증/전환하기</S.ChangeUserTypeButton>
            <S.ButtonSummary>졸업생으로 전환하시면 졸업 인증이 완료된 후에 계속 서비스를 이용하실 수 있습니다. 양해 부탁드립니다.</S.ButtonSummary>
        </>
    )
}
export default ChangeUserType