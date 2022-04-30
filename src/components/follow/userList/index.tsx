import React, { useState, useMemo, useEffect } from 'react';
import * as S from './styles';
import { showFollowType } from '../constant';

interface PropsType {
    id: string;
    userType: showFollowType;
}

const UserList: React.FC<PropsType> = () => {
    return (
        <S.Wrapper>
            <S.UserInfoBox>
                <img className="profile" />
                <S.Names>
                    <p className="username">청정원</p>
                    <p className="schoolname">미림마이스터고 재학생</p>
                </S.Names>
                <S.Buttons>
                    <button className="f4f">맞팔로우</button>
                    <button className="removefollowing">삭제</button>
                    <button className="following">팔로잉</button>
                </S.Buttons>
            </S.UserInfoBox>
        </S.Wrapper>
    )
}
export default UserList