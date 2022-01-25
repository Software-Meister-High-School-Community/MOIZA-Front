import React, { Dispatch, SetStateAction } from "react";
import * as FIF from "../FindPwForm.style";

interface IFindPwCheckProps {
  id: string;
  setId: Dispatch<SetStateAction<string>>;
}

const FindPwCheck: React.FC<IFindPwCheckProps> = ({ id, setId }) => {
  return (
    <>
      <FIF.FindPwFormTitle>아이디를 입력해주세요.</FIF.FindPwFormTitle>
      <FIF.FindPwFormInputWrap>
        <FIF.FindPwFormTextInputWrap>
          <FIF.FindPwFormTextInput
            isWrite={id !== ""}
            value={id}
            placeholder="아이디"
            name="id"
            onChange={(e) => setId(e.target.value)}
          />
        </FIF.FindPwFormTextInputWrap>
      </FIF.FindPwFormInputWrap>
    </>
  );
};
export default FindPwCheck;
