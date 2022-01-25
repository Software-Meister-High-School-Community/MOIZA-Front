import * as S from './styles'
import {useEffect, useState} from "react";
import ManageReport from "../manage-report";
import Notification from "../notification";
import {useQuery} from "../../../util/hooks/useQuery";
import {MANAGE_REPORT,NOTIFICATION} from "../constants";

const AdminMain = () => {
    const pageType = useQuery().get('page-type')
    useEffect(()=>{
        pageType === 'notification' ? setType(NOTIFICATION) : setType(MANAGE_REPORT)
    },[pageType])
    const [type,setType] = useState(MANAGE_REPORT);
    console.log(useQuery().get('page-type'))
    const changeType = (id:string) => {
        setType(id)
    }
    return (
        <S.Wrapper>
            <S.Title>어드민 페이지</S.Title>
            <S.TypeWrapper>
                <S.Types>
                    <S.Type id={MANAGE_REPORT} onClick={() => changeType(MANAGE_REPORT)} isSelected={type === MANAGE_REPORT} isLeft={true}>신고관리</S.Type>
                    <S.Type id={NOTIFICATION} onClick={()=>changeType(NOTIFICATION)} isSelected={type === NOTIFICATION}>공지사항</S.Type>
                </S.Types>
                <S.Line/>
            </S.TypeWrapper>
            {type === MANAGE_REPORT ? <ManageReport/> : <Notification/>}
        </S.Wrapper>
    )
}
export default  AdminMain;