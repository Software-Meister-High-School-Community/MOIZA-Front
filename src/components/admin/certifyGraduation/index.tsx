import React, { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { acceptGraduate, rejectGraduate } from '../../../api/admin';
import SearchInPage from '../../Common/search/searchInPage';
import Radio from '../../Common/Select/RadioButton'

type certifyType = "request" | "allow" | "refuse";

interface radioTypeInterface {
    id: certifyType,
    summary: "인증요청" | "승인목록" | "거절목록"
}

const CertifyTypeRadioArray: radioTypeInterface[] = [
    {
        id: "request",
        summary: "인증요청"
    },
    {
        id: "allow",
        summary: "승인목록"
    },
    {
        id: "refuse",
        summary: "거절목록"
    }
]

const CertifyGraduation: React.FC = () => {
    const [selectedType, setSelectedType] = useState<certifyType>("request")
    const [keyword, setKeyword] = useState('');
    const onChangeSelectedValue = useCallback(
        (selectedId: string) => {
            const id = selectedId as certifyType
            setSelectedType(id)
        }, [selectedType, setSelectedType]
    )
    const onChnageSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setKeyword(e.target.value)
    }
    const onKeyPressSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const accept = () => {
        acceptGraduate(1)
    }
    const reject = () => {
        rejectGraduate(1)
    }
    return (
        <Wrapper>
            <Options>
                <Radio name="certifyType" selected={selectedType} radioArray={CertifyTypeRadioArray} setSelected={onChangeSelectedValue} />
                <SearchInPage heigth="40" fontsize="16" onSubmit={onKeyPressSearch} onChange={onChnageSearchKeyword} value={keyword} placeholder="유저 이름 입력" width="205" />
            </Options>
            <RequestLists>
                <List>
                    <UserSummary>
                        <p className='userInfo'>짱정원</p>
                        <p className='userInfo'>미림마이스터고</p>
                        <p className='userInfo'>졸업생</p>
                    </UserSummary>
                    <PatchFile>
                        <button className='patchFile'>파일 확인</button>
                    </PatchFile>
                    <ApproveDenyButton>
                        <button className='approve' onClick={accept}>승인</button>
                        <button className='deny' onClick={reject}>거절</button>
                    </ApproveDenyButton>
                </List>
            </RequestLists>
        </Wrapper>
    )
}
export default CertifyGraduation;

const Wrapper = styled.section`
`
const Options = styled.div`
    margin-top: 36px;
    display: flex;
`
const RequestLists = styled.ul`
    width: 100%;
    margin-top: 20px;
`
const List = styled.li`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    border: 1px solid ${({ theme }) => theme.color.gray_color3};
    border-radius: 5px;
    display: flex;
    padding: 0 40px 0 26px;
    box-sizing: border-box;
`
const UserSummary = styled.em`
    display: flex;
    width: 455px;
    border-right: 1px solid ${({ theme }) => theme.color.gray_color3};
    > .userInfo {
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: ${({ theme }) => theme.color.gray_color6};
        display: flex;
        align-items: center;
        ::after{
            content: "";
            width: 3px;
            height: 3px;
            background-color: ${({ theme }) => theme.color.gray_color5};
            border-radius: 50%;
            margin: 0 14px 0 13px;
        }
        :last-child {
            ::after{
                content: "";
                width: 0;
                height: 0;
            }
        }
    }
`
const PatchFile = styled.div`
    width: 503px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid ${({ theme }) => theme.color.gray_color3};
    > .patchFile{    
        width: 123px;
        height: 40px;
        border: 1px solid ${({ theme }) => theme.color.gray_color3};
        background-color: #ffffff;
        border-radius: 5px;
    }
`
const ApproveDenyButton = styled.div`
    display: flex;
    align-items: center;
    > button {
        width: 70px;
        height: 40px;
        border: 1px solid ${({ theme }) => theme.color.gray_color3};
        background-color: #ffffff;
        border-radius: 5px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
    }
    > .approve{
        color: ${({ theme }) => theme.color.gray_color6};
        margin-left: 40px;
    }
    > .deny {
        color: #EB4D3D;
        margin-left: 22px;
    }
`