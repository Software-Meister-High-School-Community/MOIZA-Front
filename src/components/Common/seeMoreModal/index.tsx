import React from "react";
import styled from "styled-components";
import OutsideClickHandler from "react-outside-click-handler";
import { SeeMoreOptionInterface } from "../../../interface/Common/Common.type";

interface PropsType {
  setModalStatus: (status: boolean) => void;
  optionList: SeeMoreOptionInterface[];
}

const SeeMoreModal: React.FC<PropsType> = ({ setModalStatus, optionList }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setModalStatus(false)}>
      <Wrapper className="seeMoreModal">
        {optionList.map((item, index) => (
          <Option key={index} onClick={item.onClickFunction}>{item.option}</Option>
        ))}
      </Wrapper>
    </OutsideClickHandler>
  );
};
export default SeeMoreModal;

const Wrapper = styled.section`
  width: 140px;
  box-sizing: border-box;
  position: absolute;
  top: 340px;
  right: 232px;
  border: 1px solid #999999;
  background-color: #ffffff;
  z-index: 99;
`;
const Option = styled.button`
  width: 100%;
  height: 45px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 14px;
  color: #000000;
  border: none;
  background-color: transparent;
  padding: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  :after {
    content: "";
    width: 131.6px;
    border-bottom: 1px solid #e0e0e0;
    position: absolute;
    margin-top: 30px;
  }
  :last-child {
    :after {
      width: 0;
      height: 0;
    }
  }
`;
