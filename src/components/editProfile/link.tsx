import React, { useMemo, useState, ChangeEvent, useCallback } from 'react'
import { useRecoilState } from 'recoil';
import styled from 'styled-components'
import addLinkIcon from '../../assets/img/common/plus.svg'
import { profileElementState } from '../../store/editProfile/profileElement';

const maximumLinkCount = 3


const Link: React.FC = () => {
    const [linkCount, setLinkCount] = useState(1)
    const [links, setLinks] = useRecoilState(profileElementState);
    const addLinkInput = useCallback(
        () => {
            linkCount < maximumLinkCount && setLinkCount(linkCount + 1)
        }, [linkCount]
    )
    const onChangeLinkList = (e: ChangeEvent<HTMLInputElement>) => {
        const index = e.target.name as "0" | "1" | "2";
        let newArr = [...links.introduce_link_url];
        newArr[Number(index)] = e.target.value;
        setLinks({
            ...links,
            "introduce_link_url": newArr
        })
    }
    const linkInputList = useMemo(
        () => (
            Array(linkCount - 1).fill(void 0).map((item, index) => {
                return (
                    <input name={String(index + 1)} onChange={onChangeLinkList} value={links.introduce_link_url[index + 1]} key={index} className="writeLink" />
                )
            })
        ), [linkCount]
    );
    return (
        <>
            <p className="link editTitle">웹사이트</p>
            <Links>
                <input className="writeLink" onChange={onChangeLinkList} value={links.introduce_link_url[0]} name="0" />
                {linkInputList}
                {
                    linkCount < maximumLinkCount ?
                        <button className="addLink" onClick={addLinkInput}>
                            <img src={addLinkIcon} />링크 추가
                        </button> : ""
                }
            </Links>
        </>
    )
}
export default Link

const Links = styled.ul`
  width: 100%;
  margin-top: 13px;
  > button,input {
    width: 100%;
    height: 38px;
    margin-bottom: 10px;
    border: 1px solid #E0E0E0;
    box-sizing: border-box;
    border-radius: 5px;
  }
  > .writeLink {
    padding: 11px 14px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
  > .addLink {
    background: #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
      margin-right: 6.17px;
    }
  }
`