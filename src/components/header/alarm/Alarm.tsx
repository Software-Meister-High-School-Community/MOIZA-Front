import * as N from "./Alarm.style";
import { AlarmProps } from "../../../interface/Header/Alarm.type";
import OutsideClickHandler from "react-outside-click-handler";
import dateCheck from "../../../util/dateCheck";
import { useEffect } from "react";
const Alarm: React.FC<AlarmProps> = ({ alarmVisible, alarmClose }) => {
  const alarms = [
    {
      id: 1,
      name: "",
      message: "공지사항이 올라 왔습니다",
      date: "2022-02-27`T`12:12:12",
    },
    {
      id: 2,
      name: "정우재",
      message: "공지사항이 올라 왔습니다",
      date: "2022-02-27`T`12:12:12",
    },
    {
      id: 3,
      name: "",
      message: "공지사항이 올라 왔습니다",
      date: "2022-02-27`T`12:12:12",
    },
    {
      id: 4,
      name: "정우재",
      message: "공지사항이 올라 왔습니다",
      date: "2022-02-27`T`12:12:12",
    },
    {
      id: 5,
      name: "정우재",
      type: "NOTICE",
      message: "공지사항이 올라 왔습니다",
      date: "2022-02-27`T`12:12:12",
    },
  ];
  useEffect(() => {
    dateCheck(20);
  }, []);
  return (
    <N.Container disabled={alarmVisible}>
      <OutsideClickHandler onOutsideClick={alarmClose}>
        <N.NoticeForm>
          <N.Day>22/01/22</N.Day>
          {alarms.map((item, idx) => (
            <N.ItemContainer key={idx}>
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

export default Alarm;
