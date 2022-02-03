import React,{useState} from 'react';
import * as S from './styles';
import RadioButton from '../../Common/Select/RadioButton';
import {MypageOptionArray,FieldOptionArray,SortOptionArray} from '../constant'
import Dropdown from '../../Common/Select/dropdown/index';

interface PropsType {
    isMine : boolean;
}

const PostList:React.FC<PropsType> = ({isMine}) => {
    const [selectedOption,setSelectedOption] = useState('');
    const [field,setField] = useState(FieldOptionArray[0].option)
    const [sort,setSort] = useState(SortOptionArray[0].option)
    return (
        <S.Wrapper>
            <S.Options>
                <S.Title>{isMine ? "나" : <><p>장정원</p>님</>}의 게시글</S.Title>
                <RadioButton name="mypageOption" selected={selectedOption} setSelected={setSelectedOption} radioArray={MypageOptionArray}/>
                <Dropdown options={FieldOptionArray} value={field} onChangeValue={setField}/>
                <Dropdown options={SortOptionArray} value={sort} onChangeValue={setSort}/>
            </S.Options>
            <S.List>

            </S.List>
        </S.Wrapper>
    )
}
export default PostList