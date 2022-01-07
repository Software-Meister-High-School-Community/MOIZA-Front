import * as S from './styles'
import {TypeArr} from "../constants";
import { useState} from "react";
import ReportOfUser from "./reports/user";
import ReportOfPost from "./reports/post";
import ReportsofComment from "./reports/comment";

const ManageReport:React.FC = () => {
    const [seleted,setSeleted] = useState('users');
    const onChangeRadio = (id:string) => {
        setSeleted(id)
    }
    return (
        <S.Wrapper>
            <S.Types>
                {
                    TypeArr.map((item,key)=>(
                        <S.Type>
                            <div>
                                <input onChange={()=>onChangeRadio(item.id)} id={item.id} name="typecheckbox" type="radio" checked={seleted === item.id} />
                            </div>
                            <p>{item.summary}</p>
                        </S.Type>
                    ))
                }
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