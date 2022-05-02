import React, { useState } from 'react';
import * as S from './styles';
import RadioButton from '../../Common/Select/RadioButton';
import { MypageOptionArray } from '../constant'
import Dropdown from '../../Common/Select/dropdown/index';
import { departmentOptions, sortOptions } from '../../Common/Select/dropdown/options';

interface PropsType {
    isMine: boolean;
}

const PostList: React.FC<PropsType> = ({ isMine }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [field, setField] = useState(departmentOptions[0].value)
    const [sort, setSort] = useState(sortOptions[0].value)
    return (
        <S.Wrapper>
            <S.Options>
                <S.Title>{isMine ? "나" : <><p>장정원</p>님</>}의 게시글</S.Title>
                <RadioButton name="mypageOption" selected={selectedOption} setSelected={setSelectedOption} radioArray={MypageOptionArray} />
                <Dropdown options={departmentOptions} value={field} onChangeValue={setField} />
                <Dropdown options={sortOptions} value={sort} onChangeValue={setSort} />
            </S.Options>
            <S.List>

            </S.List>
        </S.Wrapper>
    )
}
export default PostList