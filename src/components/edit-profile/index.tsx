import React,{useState,useCallback,useMemo,ChangeEvent} from 'react';
import * as S from './styles';
import {LinkListProps} from './constant';
import SubmitButton from '../Common/Button/SubmitButton'
import ChangeUserProfile from './change-user-profile'
import BackgroundColor from './background-color/index'
import Introduce from './introduce'
import LinkList from './link'
import ChangeUserType from './change-user-type';

interface LinkListType {
    [name:string] : string
    firstLink : string;
    secondLink : string;
    thirdLink : string;
}

const EditProfile:React.FC = () => {
    const userId = 1
    const PersonInfo = useMemo(
        () => (
            <S.PersonInfo>
                <p className="name">장정원</p>
                <p className="school">미림마이스터고 재학생</p>
            </S.PersonInfo>
        ),[userId]
    )
    const [linkList,setLinkList] = useState<LinkListType>({
        firstLink : '',
        secondLink : '',
        thirdLink : ''
    })
    const onClickChangeBackgroundColor = (color : string) => {

    }

    return (
        <S.Wrapper>
            <div className="colorBox"/>
            <S.ProfileSection>
                <ChangeUserProfile/>
                <S.EditSection>
                    {PersonInfo}
                    <BackgroundColor onClickChangeBackgroundColor={onClickChangeBackgroundColor}/>
                    <Introduce/>
                    <LinkList LinkList={linkList} onChangeLinkListState={setLinkList}/>
                    <ChangeUserType/>
                    <section className="saveButtonSection">
                        <SubmitButton big={false} text="저장" handleClick={()=>console.log("sd")} blue={true} yellow={false} disable={true}/>
                    </section>
                </S.EditSection>
            </S.ProfileSection>
        </S.Wrapper>
    );
}
export default EditProfile