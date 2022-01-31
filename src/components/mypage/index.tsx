import React,{useState} from 'react';
import * as S from './styles';
import Profile from './profile/index';
import PostList from './postList/index';

const Mypage:React.FC = () => {
    const [isMine,setIsMine] = useState(false);
    return (
        <S.Wrapper>
            <S.UserColorBox color={"#FFB500"}/>
            <Profile isMine={isMine}/>
            <PostList isMine={isMine}/>
        </S.Wrapper>
    )
}
export default Mypage