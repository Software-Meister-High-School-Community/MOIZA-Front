import React from 'react';
import * as S from './styles';
import OutsideClickHandler from 'react-outside-click-handler';
import {SeeMoreOptionInterface} from '../../../interface/Common/Common.type'

interface PropsType {
    setModalStatus : (status : boolean) => void;
    optionList : SeeMoreOptionInterface[];
}

const SeeMoreModal:React.FC<PropsType> = ({setModalStatus,optionList}) => {
    return (
        <OutsideClickHandler onOutsideClick={()=>setModalStatus(false)}>
            <S.Wrapper className="SeeMoreModalWrapper">
                {
                    optionList.map((item,index)=>(
                        <S.Option onClick={item.onClickFunction}>{item.option}</S.Option>
                    ))
                }
            </S.Wrapper>
        </OutsideClickHandler>
    )
}
export default SeeMoreModal