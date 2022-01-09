import * as S from './styles'
import {TypeArr} from "../constants";
import { useState} from "react";
import ReportOfUser from "./reports/user";
import ReportOfPost from "./reports/post";
import ReportsofComment from "./reports/comment";
import RadioButton from '../../Common/Select/RadioButton'

const ManageReport:React.FC = () => {
    const [seleted,setSeleted] = useState('users');
    return (
        <S.Wrapper>
            <S.Types>
                <RadioButton selected={seleted} setSelected={setSeleted} radioArray={TypeArr} name="typecheckbox"/>
            </S.Types>
            { seleted === "users" ?
            <ReportOfUser/> : seleted === "posts" ?
            <ReportOfPost/> :
            <ReportsofComment/>
            }
        </S.Wrapper>
    )
}
export default ManageReport