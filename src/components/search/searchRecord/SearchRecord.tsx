import React, { useState } from "react";
import * as SR from "./SearchRecord.style";
import { ISearchProps } from "../../../interface/search/Search.type";
import * as IMGS from "../../../assets/img/index";
const SearchRecord: React.FC<ISearchProps> = ({ visible, currentSearch }) => {
  const items = [
    { id: 1, name: "일러스트레이트" },
    { id: 1, name: "정우재" },
    { id: 1, name: "팝아트" },
  ];

  return (
    <SR.ItemContainer disabled={visible}>
      <SR.Text>최근검색어</SR.Text>
      <SR.TotalDeleteBtn>전체 삭제</SR.TotalDeleteBtn>
      {items.map((item) => (
        <SR.ItemBox
          onClick={() => {
            currentSearch(item.name);
          }}
        >
          <SR.Item>{item.name}</SR.Item>
          <SR.DeleteBtn src={IMGS.SearchDelete} />
        </SR.ItemBox>
      ))}
    </SR.ItemContainer>
  );
};

export default SearchRecord;
