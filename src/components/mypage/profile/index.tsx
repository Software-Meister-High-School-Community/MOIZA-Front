import React,{useState} from 'react';
import * as S from './styles';
import defaultProfile from '../../../assets/img/mypage/defaultProfile.svg';
import {WindowOpenUtil} from '../../../util/openWindow';
import FollowButton from '../../Common/Button/SubmitButton'
import seeMore from '../../../assets/img/admin/icons/seeMore.svg';
import SeeMoreModal from '../../Common/seeMoreModal/index';
import {seeMoreOptionList} from '../constant';

interface PropsType {
    isMine : boolean;
}

const Profile:React.FC<PropsType> = ({isMine}) => {
    const img = "";
    const [seeMoreModalStatus,setSeeMoreModalStatus] = useState(false)
    return (
        <S.Wrapper>
            <img className="userProfile" src={img || defaultProfile} alt="프로필" />
            <S.UserInfo>
                <S.PersonInfo>
                    <p className="name">장정원</p>
                    <p className="school">미림마이스터고 재학생</p>
                </S.PersonInfo>
                <S.ActiveInfo>
                    게시물
                    <p className="postCount">15123</p>
                    팔로워
                    <p className="followerCount">80</p>
                    팔로잉
                    <p className="followingCount">80</p>
                </S.ActiveInfo>
                <S.Introduce>
                    안녕하세여 방가방가 소개와 웹사이트 1줄넣은 모습 최대 3줄
                </S.Introduce>
                <S.UserLinkList>
                    <li onClick={()=>WindowOpenUtil("https://www.instagram.com/won_0o0/")}>https://www.instagram.com/won_0o0/</li>
                </S.UserLinkList>
            </S.UserInfo>
            {isMine ?
                <S.modifyProfile>프로필 편집</S.modifyProfile> :
                <S.Follow>
                    <FollowButton
                        big={false}
                        text="팔로우"
                        handleClick={()=>console.log("asd")}
                        disable={false}
                        yellow={false}
                        blue={true}
                    />
                    <S.SeeMoreBtn onClick={()=>setSeeMoreModalStatus(true)}>
                        <img src={seeMore} alt="이미지"/>
                        {seeMoreModalStatus ?
                            <SeeMoreModal optionList={seeMoreOptionList} setModalStatus={setSeeMoreModalStatus}/> :
                            "" }
                    </S.SeeMoreBtn>
                </S.Follow>}
        </S.Wrapper>
    )
}
export default Profile;