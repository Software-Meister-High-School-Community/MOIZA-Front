import React,{useState,ChangeEvent,FormEvent} from 'react';
import * as S from './styles';
import {showFollowType} from './constant';
import SearchInPage from '../Common/search/searchInPage';
import UserList from './userList';

const Follow:React.FC = () => {
    const [showFollowType,setShowFollowType] = useState<showFollowType>("Follower")
    const [searchKeyword,setSearchKeyword] = useState('');
    const onChangeSearchKeyword = (e:ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
    }
    const onSubmitSearchKeyword = (e:FormEvent<HTMLFormElement>) => {

    }
    const onChangeShowFollowType = (type:showFollowType) => {
        setShowFollowType(type)
    }
    return (
        <S.Wrapper>
            <S.UserName>장정원</S.UserName>
            <S.SelectFollowType>
                <button
                    onClick={()=>onChangeShowFollowType("Follower")} className={showFollowType === "Follower" ? "selected follower" : "follower"}
                >
                    <p>800</p>&nbsp;팔로워
                </button>
                <button
                    onClick={()=>onChangeShowFollowType("Following")} className={showFollowType === "Following" ? "selected following" : "following"}
                >
                    <p>800</p>&nbsp;팔로잉
                </button>
            </S.SelectFollowType>
            <SearchInPage width="175" value={searchKeyword} placeholder="" fontsize="14" heigth="35" onChange={onChangeSearchKeyword} onSubmit={onSubmitSearchKeyword}/>
            <UserList userType={showFollowType} id="1"/>
        </S.Wrapper>
    )
}
export default Follow