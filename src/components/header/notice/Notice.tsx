import * as N from "./Notice.style";
import { NoticeProps } from "../../../interface/Header/Notice.type";
import OutsideClickHandler from "react-outside-click-handler";

const Notice: React.FC<NoticeProps> = ({ noticeState, noticeClose }) => {
  const date = new Date();
  const notices = [
    { id: 1, name: "", message: "공지사항이 올라 왔습니다", date: date },
    { id: 1, name: "정우재", message: "공지사항이 올라 왔습니다", date: date },
    { id: 1, name: "", message: "공지사항이 올라 왔습니다", date: date },
    { id: 1, name: "정우재", message: "공지사항이 올라 왔습니다", date: date },
    { id: 1, name: "정우재", message: "공지사항이 올라 왔습니다", date: date },
  ];

  return (
    <N.Container disabled={noticeState}>
      <OutsideClickHandler onOutsideClick={noticeClose}>
        <N.NoticeForm>
          <N.Day>22/01/22</N.Day>
          {notices.map((item) => (
            <N.ItemContainer>
              {item.name ? (
                <>
                  <N.Name>{item.name}</N.Name>
                  <N.ItemMessage>님 {item.message}</N.ItemMessage>
                </>
              ) : (
                <N.ItemMessage>{item.message}</N.ItemMessage>
              )}
            </N.ItemContainer>
          ))}
        </N.NoticeForm>
      </OutsideClickHandler>
    </N.Container>
  );
};

export default Notice;
