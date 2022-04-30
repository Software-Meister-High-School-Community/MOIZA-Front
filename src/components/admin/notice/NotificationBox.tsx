import { useState } from "react";
import styled from 'styled-components'
import fixed from "../../../assets/img/notice/fixedNotification.svg";
import unFixed from "../../../assets/img/notice/notification.svg";
import view from "../../../assets/img/common/openEye.svg";
import heart from "../../../assets/img/common/onHeart.svg";
import seeMore from "../../../assets/img/common/seeMoreBtnIcon.svg";
import SeeMoreModal from "../../Common/seeMoreModal/index";
import { NoticePropsType, seeMoreOptionList } from "../constant";
import { dateTransform } from "../../../util/dateTransform";

const NotificationList: React.FC<{ item: NoticePropsType }> = ({ item }) => {
  const [seeMoreModal, setSeeMoreModal] = useState(false);
  const viewDivideby1000 = Math.floor(item.view / 100) / 10;
  const postDate = item.postDate;
  const date = dateTransform(postDate);
  return (
    <List fixed={item.fix === "FIX"}>
      <img src={item.fix === "FIX" ? fixed : unFixed} />
      <h1>{item.title}</h1>
      <Date>{date}</Date>
      <Views>
        <img src={view} />
        <span>{viewDivideby1000}천</span>
      </Views>
      <Hearts>
        <img src={heart} />
        <span>{item.heart}</span>
      </Hearts>
      <SeeMore onClick={() => setSeeMoreModal(true)}>
        <img src={seeMore} />
        {seeMoreModal && (
          <SeeMoreModal
            optionList={seeMoreOptionList}
            setModalStatus={setSeeMoreModal}
          />
        )}
      </SeeMore>
    </List>

  );
};
export default NotificationList;

const List = styled.li<{
  fixed: boolean
}>`
  width: 1200px;
  height: 65px;
  box-sizing: border-box;
  padding: 20px 23px 20px 30px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 13px;
  display: flex;
  align-items: center;
  > h1 {
    margin-left: 20px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => props.fixed ? "#FFB500" : "#555555"};
  }
`;
const Date = styled.em`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #999999;
  margin-left: auto;
  :after{
    width: 1px;
    height: 100%;
    content: "";
    border-right: 1px solid #E0E0E0;
    margin: 0 30px;
  }
`;
const Views = styled.em`
  display: flex;
  align-items: center;
  > span {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #555555;
    margin-left: 6px;
  }
`;
const Hearts = styled(Views)`
  margin-left: 34px;
  cursor: pointer;
  > span {
    margin-left: 7px;
  }
`;
const SeeMore = styled.button`
  display: flex;
  margin-left: 37px;
  position: relative;
  cursor: pointer;
  > div >.seeMoreModal {
    position: absolute; 
    top: 24px;
    right: 0;
  }
`;