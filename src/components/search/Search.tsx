import React, { useEffect, useRef, useState } from "react";
import * as S from "./Search.style";
import OutsideClickHandler from "react-outside-click-handler";
import * as IMGS from "../../assets/img/index";
import SearchRecord from "./searchRecord/SearchRecord";
import useSearch from "../../hooks/search/useSearch";

const Search: React.FC = () => {
  const {
    handleDelteSearchRecord,
    handleAddSearchRecord,
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
                if (e.key === "Enter" && searchRecord)
                  handleAddSearchRecord(searchRecord);
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
                searchRecord && handleAddSearchRecord(searchRecord);
              }}
            >
              <S.Img src={IMGS.SearchLogo} />
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
