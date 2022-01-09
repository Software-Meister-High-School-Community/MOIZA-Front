import * as N from "./Notice.style"
import { NoticeProps } from "../../../interface/Header/Notice.type"
import NoticeProfile from '../../../assets/img/header/noticeProfileImg.svg'
import Modal from 'react-modal'
import { useState } from "react"
const Notice:React.FC<NoticeProps> = ({modalState,modalClose}) => {

    const date = new Date();

    const notices= [
        {id:1 , name:'', message:'공지사항이 올라 왔습니다', date:date },
        {id:1 , name:'정우재', message:'공지사항이 올라 왔습니다', date:date },
        {id:1 , name:'', message:'공지사항이 올라 왔습니다', date:date },
        {id:1 , name:'정우재', message:'공지사항이 올라 왔습니다', date:date },
        {id:1 , name:'정우재', message:'공지사항이 올라 왔습니다', date:date },
    ]

    const handleDisplay:any = () =>{
        let isDisplay = 'none';
        modalState  ? isDisplay ='block': isDisplay='none';
        return isDisplay
    }

    return (<>
        <N.Vertex isDisplay={handleDisplay}/>
        <Modal isOpen={modalState} onRequestClose={modalClose} style={{
            overlay:{
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
            content: {
                border:'none',
                padding:'0',
                marginTop:'20px',
                marginLeft:'50%',
                width:'508px',
                height:'400px',
                overflow:'hidden',
                backgroundColor: 'rgba(0, 0, 0, 0)'   
            }
        }}>
        <N.Container>
        <N.NoticeForm >
            <N.Day>오늘</N.Day>
            {
                notices.map((item)=>(
                    
                    <N.ItemContainer>
                        {
                            item.name ? 
                            <>
                            <N.ItemImg src={NoticeProfile}/>
                            <N.Name>{item.name}</N.Name>
                            <N.ItemText>님 {item.message}</N.ItemText>
                            </>
                            :
                            <N.ItemText>{item.message}</N.ItemText>
                        }
                    </N.ItemContainer>
                ))
            }
        
        </N.NoticeForm>
            </N.Container>
        </Modal>
            </>
    )
}

export default Notice
