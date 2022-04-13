import React from "react";
import * as S from "./styles";
import searchIcon from "../../../../assets/img/common/searchIcon.svg";
import { searchInPagePropsType } from "../../../../interface/Common/Common.type";

const SearchInPage: React.FC<searchInPagePropsType> = ({
  onSubmit,
  onChange,
  value,
  placeholder,
  width,
  heigth,
  fontsize,
}) => {
  return (
    <S.Wrapper onSubmit={onSubmit} className="searchInPage">
      <S.SearchInput width={width} heigth={heigth} fontsize={fontsize}>
        <input
          type="text"
          onChange={onChange}
          value={value}
          placeholder={placeholder}
        />
        <img src={searchIcon} />
      </S.SearchInput>
    </S.Wrapper>
  );
};
export default SearchInPage;
