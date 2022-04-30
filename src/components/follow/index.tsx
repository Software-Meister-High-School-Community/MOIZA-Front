import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import styled from 'styled-components';
import { showFollowType } from './constant';
import SearchInPage from '../Common/search/searchInPage';
import UserList from './userList';
import { getFollowList } from '../../api/follow';
import { getFollowListResponse } from '../../models/follow/response';

const Follow: React.FC = () => {
    const [showFollowType, setShowFollowType] = useState<showFollowType>("follower")
    const [searchKeyword, setSearchKeyword] = useState('');
    const [followlist, setFollowList] = useState<getFollowListResponse>()
    const onChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);
    }
    const onSubmitSearchKeyword = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const onChangeShowFollowType = (type: showFollowType) => {
        setShowFollowType(type)
    }
    useEffect(
        () => {
            getFollowList(1).then(res => setFollowList(res))
        }, []
    )
    return (
        <Wrapper>
            <UserName>장정원</UserName>
            <SelectFollowType>
                <button
                    onClick={() => onChangeShowFollowType("follower")} className={showFollowType === "follower" ? "selected follower" : "follower"}
                >
                    <p>800</p>&nbsp;팔로워
                </button>
                <button
                    onClick={() => onChangeShowFollowType("following")} className={showFollowType === "following" ? "selected following" : "following"}
                >
                    <p>800</p>&nbsp;팔로잉
                </button>
            </SelectFollowType>
            <SearchInPage width="175" value={searchKeyword} placeholder="" fontsize="14" heigth="35" onChange={onChangeSearchKeyword} onSubmit={onSubmitSearchKeyword} />
            <UserList userType={showFollowType} id="1" />
        </Wrapper>
    )
}
export default Follow;

const Wrapper = styled.section`
  width: 995px;
  margin: 0 auto;
  > .searchInPage {
    display: flex;
    justify-content: flex-end;
    margin: 28px 0;
  }
`
const UserName = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 37px;
  color: #000000;
  margin-top: 70px;
`
const SelectFollowType = styled.strong`
  display: flex;
  width: 100%;
  margin-top: 93px;
  > button {
    width: 50%;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #555555;
    padding-bottom: 31px;
    border-bottom: 1px solid #E0E0E0;
    display: flex;
    justify-content: center;
  }
  > .selected {
    border-bottom: 1px solid #0048FF;
    color: #0048FF;
  }
`