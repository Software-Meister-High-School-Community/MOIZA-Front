import React from "react";
import * as S from './styles';

interface PropsType {
    isFix : boolean
    onChangeFixState : (prevState : boolean) => void
}

const Switch:React.FC<PropsType> = ({isFix,onChangeFixState}) => {
    return (
        <S.Wrapper>
            <input type="checkbox" checked={isFix} onChange={()=>onChangeFixState(isFix)}/>
            <span className="slider"/>
        </S.Wrapper>
    )
}
export default Switch;