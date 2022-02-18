import React from 'react';
import * as S from './styles';
import {BackgroundColorListArray} from '../constant'

interface PropsType {
    onClickChangeBackgroundColor : (color : string) => void;
}

const BackgroundColor:React.FC<PropsType> = ({onClickChangeBackgroundColor}) => {
    return (
        <>
            <p className="backgroundColor editTitle">배경 컬러 변경</p>
            <S.ColorList>
                {BackgroundColorListArray.map((backgroundcolor, index) => (
                    <S.EachColorBox onClick={() => {
                        onClickChangeBackgroundColor(backgroundcolor)
                    }} backgroundcolor={backgroundcolor}/>
                ))}
            </S.ColorList>
        </>
    )
}
export default BackgroundColor