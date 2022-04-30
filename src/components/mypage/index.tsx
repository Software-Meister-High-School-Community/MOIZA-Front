import React, { useState } from 'react';
import * as S from './styles';
import Profile from './profile/index';
import PostList from './postList/index';
import PageNation from '../Common/pagination'

const Mypage: React.FC = () => {
    const [isMine, setIsMine] = useState(false);
    const [pagenation, setPagenation] = useState(1);
    return (
        <S.Wrapper>
            <S.UserColorBox color={"#FFB500"} />
            <Profile isMine={isMine} />
            <PostList isMine={isMine} />
            <nav className="pageNation">
                <PageNation total={5} page={pagenation} limit={1} setPage={setPagenation} />
            </nav>
        </S.Wrapper>
    )
}
export default Mypage