import * as S from './styles'
import { TypeArr, InputStyle, UserReportTestArray, PostReportTestArray, CommentReportTestArray, UserReportPropsType, PostReportPropsType, CommentReportPropsType } from "../constants";
import { useState, ChangeEvent, useMemo, useEffect, FormEvent } from "react";
import ReportOfUser from "./reports/user";
import ReportOfPost from "./reports/post";
import ReportsofComment from "./reports/comment";
import RadioButton from '../../Common/Select/RadioButton'
import SearchInPage from '../../Common/search/searchInPage';

const ManageReport: React.FC = () => {
    const [selectedType, setselectedType] = useState('users');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [reportList, setReportList] = useState<{
        users: UserReportPropsType[],
        posts: PostReportPropsType[],
        comments: CommentReportPropsType[]
    }>({
        users: [],
        posts: [],
        comments: []
    })
    useEffect(
        () => {
            setSearchKeyword('')
            if (selectedType === 'users') {
                setReportList({
                    ...reportList,
                    ["users"]: UserReportTestArray
                })
            } else if (selectedType === 'posts') {
                setReportList({
                    ...reportList,
                    ['posts']: PostReportTestArray
                })
            } else setReportList({
                ...reportList,
                ["comments"]: CommentReportTestArray
            })
        }, [selectedType]
    )
    const onChangeSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value)
    }
    const onKeyPressSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }
    const InputStyleObject = useMemo(
        () => {
            if (selectedType === 'users') return InputStyle.user
            else if (selectedType === 'posts') return InputStyle.post
            else if (selectedType === "comments") return InputStyle.comment
            else return {
                width: "1000",
                placeholder: "코드 수정해라"
            }
        }, [selectedType]
    )
    return (
        <S.Wrapper>
            <S.Types>
                <RadioButton selected={selectedType} setSelected={setselectedType} radioArray={TypeArr} name="typecheckbox" />
                <SearchInPage heigth="40" fontsize="16" onSubmit={onKeyPressSearch} onChange={onChangeSearchKeyword} value={searchKeyword} placeholder={InputStyleObject.placeholder} width={InputStyleObject.width} />
            </S.Types>
            {selectedType === "users" ?
                reportList.users.map((item, index) => (
                    <ReportOfUser key={index} searchKeyword={searchKeyword} userReport={item} />
                ))
                : selectedType === "posts" ?
                    reportList.posts.map((item, index) => (
                        <ReportOfPost key={index} searchKeyword={searchKeyword} PostReport={item} />
                    ))
                    : selectedType === "comments" ?
                        reportList.comments.map((item, index) => (
                            <ReportsofComment key={index} searchKeyword={searchKeyword} commentProps={item} />
                        ))
                        : "<strong>코드 수정 필요</strong>"
            }
        </S.Wrapper>
    )
}
export default ManageReport