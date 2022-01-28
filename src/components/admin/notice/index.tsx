import * as S from './styles';
import React,{useState,useEffect} from 'react';
import DropDown from '../../Common/Select/dropdown/index'
import {OptionArr} from '../constants/index'
import NotificationList from './notice-lists/index'
import {NoticePropsType,NoticeListTestArray} from '../constants/index';

const Notification = () => {
    const [value,setValue] = useState(OptionArr[0].option);
    const [noticeList,setNoticeList] = useState<NoticePropsType[]>([])
    useEffect(
        () => {
            setNoticeList(NoticeListTestArray)
        },[]
    )
    return (
        <S.Wrapper>
            <DropDown value={value} onChangeValue={setValue} options={OptionArr}/>
            {noticeList.map((item,index)=>(
                <NotificationList item={item}/>
            ))}
        </S.Wrapper>
    )
}
export default  Notification