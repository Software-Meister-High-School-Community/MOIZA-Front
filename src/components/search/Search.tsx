import React, { useEffect, useRef, useState } from "react";
import SearchResult from "./searchRecord/SearchRecord";
import * as S from "./Search.style";
import OutsideClickHandler from "react-outside-click-handler";
import * as IMGS from "../../assets/img/index";
import SearchRecord from "./searchRecord/SearchRecord";

const Search: React.FC = () => {
  const searchEl = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [visible, setVisble] = useState(false);
  const [currentSearch, setCurrentSearch] = useState("");
  const [items, setItems] = useState([]);

  return (
    <S.Wrapper>
      <S.Title>검색</S.Title>
      <S.SearchWrapper>
        <OutsideClickHandler onOutsideClick={() => setVisble(false)}>
          <S.Container>
            <S.Input
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
                return e.preventDefault();
              }}
            >
              <S.Img src={IMGS.SearchLogo} />
            </S.SubmitButton>
          </S.Container>
          <SearchRecord visible={visible} currentSearch={setCurrentSearch} />
        </OutsideClickHandler>
      </S.SearchWrapper>
    </S.Wrapper>
  );
};

export default Search;
