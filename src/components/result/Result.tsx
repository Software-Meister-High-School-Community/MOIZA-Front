import React, { useState } from "react";
import * as R from "./Result.style";
import Dropdown from "../Common/Select/dropdown";
import PostResult from "./postResult";
import UserResult from "./userResult";
import useResult from "../../hooks/result/useResult";
import RadioButton from "../Common/Select/RadioButton";
import { departmentOptions, sortOptions } from "../Common/Select/dropdown/options";
const Result: React.FC = () => {
  const {
    selectedRadio,
    setSelectedRadio,
    departmentOption,
    setdepartmentOption,
    sortOption,
    setSortOption,
    radios,
  } = useResult();
  return (
    <>
      <R.Container>
        <R.RadioBtnBox>
          <RadioButton
            radioArray={radios}
            name="result"
            selected={selectedRadio}
            setSelected={setSelectedRadio}
          />
        </R.RadioBtnBox>

        <R.DropdownBox>
          <Dropdown
            options={departmentOptions}
            value={departmentOption}
            onChangeValue={setdepartmentOption}
          />
          <Dropdown
            options={sortOptions}
            value={sortOption}
            onChangeValue={setSortOption}
          />
        </R.DropdownBox>
      </R.Container>
      <UserResult />
      <PostResult />
    </>
  );
};

export default Result;
