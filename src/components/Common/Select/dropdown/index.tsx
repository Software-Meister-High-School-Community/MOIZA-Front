import * as S from './styles'
import React,{useState,useEffect} from 'react'
import Arrow from '../../../../assets/img/Common/dropdown-arrow.svg'
import {IDropdownProps} from '../../../../interface/Common/Common.type'
const Dropdown:React.FC<IDropdownProps> = ({options,value,setValue}) => {
    // components > admin > notification > index.tsx 참고!
    const [isFold,setIsFold] = useState(false);
    return (
        <S.Wrapper>
            <label onClick={()=>setIsFold(!isFold)}>
                <S.Seleted>{value}</S.Seleted>
                <S.Arrow isFold={isFold} src={Arrow}/>
            </label>
            {isFold ? options.map((item,index)=>(
                <S.Option onClick={()=>{
                    setValue(item.option)
                    setIsFold(false)
                }} isSelected={value === item.option}>{item.option}</S.Option>
            )) : ""}
        </S.Wrapper>
    )
}
export default Dropdown