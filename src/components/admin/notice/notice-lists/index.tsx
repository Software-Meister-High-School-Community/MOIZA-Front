import { useState } from "react";
import * as S from "./styles";
import fixed from "../../../../assets/img/notice/fixedNotification.svg";
import unFixed from "../../../../assets/img/notice/notification.svg";
import view from "../../../../assets/img/admin/icons/view.svg";
import heart from "../../../../assets/img/admin/icons/heart.svg";
import seeMore from "../../../../assets/img/admin/icons/seeMore.svg";
import SeeMoreModal from "../../../Common/seeMoreModal/index";
import { NoticePropsType, seeMoreOptionList } from "../../constants/index";

const NotificationList: React.FC<{ item: NoticePropsType }> = ({ item }) => {
  const [seeMoreModal, setSeeMoreModal] = useState(false);
  const viewDivideby1000 = Math.floor(item.view / 100) / 10;
  const postDate = item.postDate;
  const year = postDate.substr(1, 2);
  const month = postDate.substr(4, 2);
  const day = postDate.substr(6, 2);
  const hour = `${postDate.substr(9, 1)}:${postDate.substr(10, 2)}`;
  const date = `${year}/${month}/${day}\u00a0${hour}`;
  return (
    <S.Wrapper>
      <S.List fixed={item.fix === "FIX"}>
        <img src={item.fix === "FIX" ? fixed : unFixed} />
        <h1>{item.title}</h1>
        <S.Date>{date}</S.Date>
        <S.Views>
          <img src={view} />
          <span>{viewDivideby1000}천</span>
        </S.Views>
        <S.Hearts>
          <img src={heart} />
          <span>{item.heart}</span>
        </S.Hearts>
        <S.SeeMore onClick={() => setSeeMoreModal(true)}>
          <img src={seeMore} />
          {seeMoreModal ? (
            <SeeMoreModal
              optionList={seeMoreOptionList}
              setModalStatus={setSeeMoreModal}
            />
          ) : (
            ""
          )}
        </S.SeeMore>
      </S.List>
    </S.Wrapper>
  );
};
export default NotificationList;
