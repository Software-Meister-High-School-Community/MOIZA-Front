import React, { useState, useEffect } from 'react';
import DropDown from '../../Common/Select/dropdown/index'
import NotificationList from './NotificationBox'
import { NoticePropsType, NoticeListTestArray } from '../constant';
import { sortOptions } from '../../Common/Select/dropdown/options';

const Notification = () => {
    const [value, setValue] = useState(sortOptions[0].option);
    const [noticeList, setNoticeList] = useState<NoticePropsType[]>([])
    useEffect(
        () => {
            setNoticeList(NoticeListTestArray)
        }, []
    )
    return (
        <section className="noticeListWrapper">
            <DropDown value={value} onChangeValue={setValue} options={sortOptions} />
            {noticeList.map((item, index) => (
                <NotificationList item={item} key={index} />
            ))}
        </section>
    )
}
export default Notification