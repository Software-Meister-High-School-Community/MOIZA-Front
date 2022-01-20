import React from 'react'
import * as S from './serch.style'
import DeleteImg from '../../assets/img/serch/deleteImg.svg'
import { SerchProps } from '../../interface/serch/Serch.type'
const SerchResult:React.FC<SerchProps> = ({visible}) => {

    const items = [
        {id:1, name:'일러스트레이트'},
        {id:1, name:'일러스트레이트'},
        {id:1, name:'일러스트레이트'}
,
    ];
    return (
        <S.ItemContainer disabled={visible} onClick={(e)=> console.log(e.currentTarget)}>
        <S.Text>최근검색어</S.Text>
        <S.TotalDeleteBtn>전체 삭제</S.TotalDeleteBtn>
       {
         items.map((item) => (
                <S.ItemBox>
                   <S.Item>{item.name}</S.Item>
                   <S.DeleteBtn src={DeleteImg}/>
               </S.ItemBox>
         ))
       }
   </S.ItemContainer>
    )
}

export default SerchResult
