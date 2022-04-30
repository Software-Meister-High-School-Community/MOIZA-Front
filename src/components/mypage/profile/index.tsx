import React, { useState } from "react";
import * as S from "./styles";
import defaultProfile from "../../../assets/img/common/userDefaultIcon.svg";
import { WindowOpenUtil } from "../../../util/openWindow";
import FollowButton from "../../Common/Button/SubmitButton";
import seeMore from "../../../assets/img/common/seeMoreBtnIcon.svg";
import SeeMoreModal from "../../Common/seeMoreModal/index";
import { seeMoreOptionList } from "../constant";
import { UserProfileResponseType } from "../../../models/users/response";

interface PropsType {
  isMine: boolean;
}

const Profile: React.FC<PropsType> = ({ isMine }) => {
  const img = "";
  const [seeMoreModalStatus, setSeeMoreModalStatus] = useState(false);
  const [pageContent, setPageContent] = useState<UserProfileResponseType>();
  return (
    <S.Wrapper>
      <img className="userProfile" src={img || defaultProfile} alt="프로필" />
      <S.UserInfo>
        <S.PersonInfo>
          <p className="name">{pageContent?.name}</p>
          <p className="school">{pageContent?.school}</p>
        </S.PersonInfo>
        <S.ActiveInfo>
          게시물
          <p className="postCount">{pageContent?.feed_count}</p>
          팔로워
          <p className="followerCount">{pageContent?.follower_count}</p>
          팔로잉
          <p className="followingCount">{pageContent?.following_count}</p>
        </S.ActiveInfo>
        <S.Introduce>
          {pageContent?.introduce}
        </S.Introduce>
        <S.UserLinkList>
          {
            pageContent?.link_url?.map((item, index) => {
              <li
                onClick={() => WindowOpenUtil(item)}
              >
                {item}
              </li>
            })
          }
        </S.UserLinkList>
      </S.UserInfo>
      {isMine ? (
        <S.modifyProfile>프로필 편집</S.modifyProfile>
      ) : (
        <S.Follow>
          <FollowButton
            big={false}
            text="팔로우"
            handleClick={() => console.log("asd")}
            disable={false}
            yellow={false}
            blue={true}
          />
          <S.SeeMoreBtn onClick={() => setSeeMoreModalStatus(true)}>
            <img src={seeMore} alt="이미지" />
            {seeMoreModalStatus ? (
              <SeeMoreModal
                optionList={seeMoreOptionList}
                setModalStatus={setSeeMoreModalStatus}
              />
            ) : (
              ""
            )}
          </S.SeeMoreBtn>
        </S.Follow>
      )}
    </S.Wrapper>
  );
};
export default Profile;
