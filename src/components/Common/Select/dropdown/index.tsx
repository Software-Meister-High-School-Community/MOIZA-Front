import * as S from "./styles";
import React, { useState } from "react";
import Arrow from "../../../../assets/img/common/arrow.svg";
import { IDropdownProps } from "../../../../interface/Common/Common.type";
import OutsideClickHandler from "react-outside-click-handler";
const Dropdown: React.FC<IDropdownProps> = ({
  options,
  value,
  onChangeValue,
}) => {
  // components > admin > notification > index.tsx 참고!
  const [isFold, setIsFold] = useState(false);
  const onClickRadio = (clickedOption: string) => {
    onChangeValue(clickedOption);
    setIsFold(false);
  };
  const onClickCloseDropdown = () => {
    isFold && setIsFold(false);
  };
  return (
    <S.Wrapper className="dropdownWrapper" isFold={isFold}>
      <OutsideClickHandler onOutsideClick={onClickCloseDropdown}>
        <label onClick={() => setIsFold(!isFold)}>
          <S.Seleted>{value}</S.Seleted>
          <S.Arrow isFold={isFold} src={Arrow} />
        </label>
        <div className="list">
          {isFold
            ? options.map((item, index) => (
                <S.Option
                  onClick={() => onClickRadio(item.option)}
                  isSelected={value === item.option}
                >
                  {item.option}
                </S.Option>
              ))
            : ""}
        </div>
      </OutsideClickHandler>
    </S.Wrapper>
  );
};
export default Dropdown;
