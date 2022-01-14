import * as S from './styles';
import React,{useState} from 'react';
import DropDown from '../../Common/Select/dropdown/index'
import {OptionArr} from '../constants/index'
import NotificationLists from './notification-lists/index'
const Notification = () => {
    const [value,setValue] = useState(OptionArr[0].option);
    return (
        <S.Wrapper>
            <DropDown value={value} onChangeValue={setValue} options={OptionArr}/>
            <NotificationLists></NotificationLists>
        </S.Wrapper>
    )
}
export default  Notification