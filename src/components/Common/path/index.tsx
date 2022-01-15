import React, {useMemo} from "react";
import * as S from './styles';
import {PathType} from "../../../interface/Common/Common.type";
import {Link} from "react-router-dom";
import pathArrow from '../../../assets/img/Common/pathArrow.svg'

interface PropsType {
    pathArray :PathType[];
}

const Path:React.FC<PropsType> = ({pathArray}) => {
    const PathList = useMemo(()=>{
        return pathArray.map((item,index)=>(
           <li>
               <Link to={item.link}>
                   <S.Path>{item.path}</S.Path>
               </Link>
               <img src={pathArrow}/>
           </li>
        ))
    },[pathArray])
    return (
        <S.Wrapper>
            {PathList}
        </S.Wrapper>
    )
}
export default Path