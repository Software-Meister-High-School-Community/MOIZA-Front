import React from 'react';
import * as S from './styles';
import Follow from '../../components/follow/index'
import Path from '../../components/Common/path'
import {PathType} from '../../interface/Common/Common.type'

const FollowPage = () => {
    const pathArray:PathType[] = [
        {
            path : "프로필",
            link : "/"
        },
        {
            path : "팔로워 / 팔로잉",
            link:  ""
        }
    ]
    return (
        <S.Wrapper>
            <Path pathArray={pathArray}/>
            <Follow/>
        </S.Wrapper>
    )
}
export default FollowPage;