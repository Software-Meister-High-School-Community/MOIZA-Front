import React, { ChangeEvent, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import { profileElementState } from '../../store/editProfile/profileElement';


const Introduction: React.FC = () => {
    const [introduction, setIntroduction] = useRecoilState(profileElementState);
    const onChnageIntroduction = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => {
            setIntroduction({
                ...introduction,
                "introduce": e.target.value
            })
        }, [introduction]
    )
    return (
        <>
            <p className="introduce editTitle">소개</p>
            <IntroduceInputArea value={introduction.introduce} onChange={onChnageIntroduction} />
        </>
    )
}
export default Introduction

const IntroduceInputArea = styled.textarea`
  box-sizing: border-box;
  width: 717px;
  height: 107px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  border-radius: 5px;
  resize: none;
  margin-top: 13px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #000000;
  padding: 12px 2px 12px 14px;
`