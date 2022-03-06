import * as S from './styles'
import React, { useMemo } from 'react';

interface PropsType {
    keyword: string;
    string: string;
    fontColor: string;
}

const useReplaceKeyword: React.FC<PropsType> = ({ keyword, string, fontColor }) => {
    const startIndex = string.indexOf(keyword); // 본문에서 키워드와 일치하는 값의 인덱스값을 받아옴
    const gapToUnicode = string.replace(/ /g, "\u00a0"); // 받아온 본문 내용의 공백을 유니코드 nbsp; 로 치환

    if (startIndex === -1) return <>{gapToUnicode}</>; // 키워드와 본문이 일치하는 내용이 없다면 본문을 반환

    const keywordToUnicode = keyword.replace(/ /g, "\u00a0"); // 키워드로 넘어온 값의 공백을 유니코드로 치환
    const firstString = gapToUnicode.substr(0, startIndex) // 본문의 처음부터 키워드와 일치하는 단어 이전까지 저장
    const secondString = gapToUnicode.substr(startIndex + keywordToUnicode.length) // 키워드 뒤에 있는 본문 내용을 저장
    const prevString = React.createElement('div', null, firstString); // jsx문법으로 넣음
    const replacedString = React.createElement('p', null, keywordToUnicode); // jsx문법으로 넣음
    const nextString = React.createElement('div', { className: "second" }, secondString) // jsx문법으로 넣음
    return (
        <S.Wrapper margin={secondString.length !== 0 && secondString[0] === " "} color={fontColor}>{prevString}{replacedString}{nextString}</S.Wrapper>
    )
}
export default useReplaceKeyword;