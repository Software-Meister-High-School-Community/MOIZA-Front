import React, { useEffect, useRef, useState } from "react";
import * as S from "./Search.style";
import OutsideClickHandler from "react-outside-click-handler";
import SearchRecord from "./searchRecord/SearchRecord";
import useSearch from "../../hooks/search/useSearch";
import searchIcon from "../../assets/img/common/searchIcon.svg";
const Search: React.FC = () => {
  const {
    handleDelteSearchRecord,
    onSearch,
    handleResetSearchRecords,
    searchEl,
    disabled,
    visible,
    setVisble,
    currentSearch,
    setCurrentSearch,
    setDisabled,
    searchRecords,
  } = useSearch();
  return (
    <S.Wrapper>
      <S.Title>검색</S.Title>
      <S.SearchWrapper>
        <OutsideClickHandler onOutsideClick={() => setVisble(false)}>
          <S.Container>
            <S.Input
              onKeyPress={(e) => {
                const searchRecord = searchEl.current?.value;
                if (e.key === "Enter" && searchRecord) onSearch(searchRecord);
              }}
              ref={searchEl}
              autoFocus
              onFocus={() => {
                setDisabled(true);
                setVisble(true);
              }}
              onBlur={() => setDisabled(false)}
              placeholder="검색어를 입력하세요"
              value={currentSearch}
              onChange={(e) => {
                setCurrentSearch(e.target.value);
              }}
            />
            <S.SubmitButton
              disabled={disabled}
              onClick={(e) => {
                e.preventDefault();
                const searchRecord = searchEl.current?.value;
                searchRecord && onSearch(searchRecord);
              }}
            >
              <S.Img src={searchIcon} />
            </S.SubmitButton>
          </S.Container>
          <SearchRecord
            onReset={handleResetSearchRecords}
            visible={visible}
            currentSearch={setCurrentSearch}
            searchRecords={searchRecords}
            onDelete={handleDelteSearchRecord}
          />
        </OutsideClickHandler>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
