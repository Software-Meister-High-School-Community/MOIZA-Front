import * as S from "./styles";
import React, { useMemo, useState } from "react";
import Arrow from "../../../../assets/img/common/arrow.svg";
import { IDropdownProps, OptionArrType } from "../../../../interface/Common/Common.type";
import OutsideClickHandler from "react-outside-click-handler";
const Dropdown: React.FC<IDropdownProps> = ({
  options,
  value,
  onChangeValue,
}) => {
  // components > admin > notification > index.tsx 참고!
  const [isFold, setIsFold] = useState(false);
  const onClickOption = (clickedOption: string) => {
    onChangeValue(clickedOption);
    setIsFold(false);
  };
  const onClickCloseDropdown = () => {
    isFold && setIsFold(false);
  };
  const selectedValue = useMemo(
    () => {
      const index = options.findIndex(
        (i: OptionArrType) => i.value === value
      );
      if (index === -1) return value;
      return options[index].option
    }, [value]
  )
  return (
    <S.Wrapper className="dropdownWrapper" isFold={isFold}>
      <OutsideClickHandler onOutsideClick={onClickCloseDropdown}>
        <label onClick={() => setIsFold(!isFold)}>
          <S.Seleted>{selectedValue}</S.Seleted>
          <S.Arrow isFold={isFold} src={Arrow} />
        </label>
        <div className="list">
          {isFold
            ? options.map((item) => (
              <S.Option
                key={item.value}
                onClick={() => onClickOption(item.value)}
                isSelected={value === item.value}
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
