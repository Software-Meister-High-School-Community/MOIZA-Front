import React, { useState } from "react";
import * as R from "./Result.style";
import Dropdown from "../Common/Select/dropdown";
import PostResult from "./postResult";
import UserResult from "./userResult";
import useResult from "../../hooks/result/useResult";
import RadioButton from "../Common/Select/RadioButton";
const Result = () => {
  const { title } = useResult();
  console.log(title.get("name"));
  const [selected, setSelected] = useState<string>("1");
  const name = "result";
  const radios = [
    { id: "1", summary: "전체" },
    { id: "2", summary: "질문" },
    { id: "3", summary: "일반" },
  ];
  const array = [
    { option: "모든 분야" },
    { option: "Front-End" },
    { option: "Back-End" },
    { option: "IOS" },
    { option: "Android" },
    { option: "Design" },
    { option: "Game" },
    { option: "Security" },
    { option: "Embedded" },
    { option: "AI" },
  ];
  const sortOptions = [
    { option: "최신 순" },
    { option: "오래된 순" },
    { option: "조회수 순" },
    { option: "좋아요 순" },
  ];
  const [value, setValue] = useState("모든분야");
  const [sortOption, setSortOption] = useState("최신 순");

  return (
    <>
      <R.Container>
        <R.RadioBtnBox>
          <RadioButton
            radioArray={radios}
            name={name}
            selected={selected}
            setSelected={setSelected}
          />
        </R.RadioBtnBox>

        <R.DropdownBox>
          <Dropdown options={array} value={value} onChangeValue={setValue} />
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
