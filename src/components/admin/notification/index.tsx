import * as S from './styles';
import React,{useState} from 'react';
import DropDown from '../../Common/Select/dropdown/index'
import {OptionArr} from '../constants/index'
const Notification = () => {
    const [value,setValue] = useState(OptionArr[0].option);
    return (
        <S.Wrapper>
            <DropDown value={value} setValue={setValue} options={OptionArr}/>
        </S.Wrapper>
    )
}
export default  Notification