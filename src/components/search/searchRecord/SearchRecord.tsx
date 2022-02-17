import React, { useState } from "react";
import * as SR from "./SearchRecord.style";
import { ISearchProps } from "../../../interface/search/Search.type";
import * as IMGS from "../../../assets/img/index";
const SearchRecord: React.FC<ISearchProps> = ({
  visible,
  currentSearch,
  searchRecords,
  onDelete,
  onReset,
}) => {
  return (
    <SR.ItemContainer disabled={visible}>
      <SR.Text>최근검색어</SR.Text>
      <SR.TotalDeleteBtn
        onClick={() => {
          onReset();
        }}
      >
        전체 삭제
      </SR.TotalDeleteBtn>
      {searchRecords.map(({ id, title }) => (
        <SR.ItemBox
          onClick={() => {
            currentSearch(title);
          }}
        >
          <SR.Item>{title}</SR.Item>
          <SR.DeleteBtn
            src={IMGS.SearchDelete}
            onClick={() => {
              onDelete(id);
            }}
          />
        </SR.ItemBox>
      ))}
    </SR.ItemContainer>
  );
};

export default SearchRecord;