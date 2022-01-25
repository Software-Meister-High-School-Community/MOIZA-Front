import React from 'react'
import * as S from './Search.style'
import { ISearchProps } from '../../interface/search/Search.type'
import * as IMGS from '../../assets/img/index'
const SearchRecord:React.FC<ISearchProps> = ({visible}) => {

    const items = [
        {id:1, name:'일러스트레이트'},
        {id:1, name:'일러스트레이트'},
        {id:1, name:'일러스트레이트'}
    ];

    return (
        <S.ItemContainer disabled={visible}>
        <S.Text>최근검색어</S.Text>
        <S.TotalDeleteBtn>전체 삭제</S.TotalDeleteBtn>
       {
         items.map((item) => (
                <S.ItemBox>
                   <S.Item>{item.name}</S.Item>
                   <S.DeleteBtn src={IMGS.SearchDelete}/>
               </S.ItemBox>
         ))
       }
   </S.ItemContainer>
    )
}

export default SearchRecord
