import React from 'react'
import * as N from "./Notice.style"
import NoticeProfile from '../../../assets/img/header/noticeProfileImg.svg'

const Notice = () => {

    const date = new Date()

    console.log(date);

    const notices= [
        {id:1 , name:'', message:'공지사항이 올라 왔습니다', date:date },
        {id:1 , name:'정우재', message:'공지사항이 올라 왔습니다', date:date },
        {id:1 , name:'', message:'공지사항이 올라 왔습니다', date:date },
        {id:1 , name:'정우재', message:'공지사항이 올라 왔습니다', date:date },
        {id:1 , name:'정우재', message:'공지사항이 올라 왔습니다', date:date },
    ]

    return (
        <N.Container>
        <N.NoticeForm >
            {
                notices.map((item)=>(
                    
                    <N.ItemContainer>
                        {
                            item.name ? 
                            <>
                            <N.ItemImg src={NoticeProfile}/>
                            <N.ItemText>{item.message}</N.ItemText>
                            </>
                            :
                            <N.ItemText>{item.message}</N.ItemText>
                        }
                    </N.ItemContainer>
                ))
            }
        
        </N.NoticeForm>
            </N.Container>
    )
}

export default Notice
