import React,{useMemo,useState,ChangeEvent,useCallback} from 'react'
import * as S from './styles'
import addLinkIcon from '../../../assets/img/common/plus.svg'

const maximumLinkCount = 3
type nameOfInputType = "firstLink" | "secondLink" | "thirdLink";
interface LinkListType {
    [name:string] : string
    firstLink : string;
    secondLink : string;
    thirdLink : string;
}

interface PropsType {
    LinkList : LinkListType;
    onChangeLinkListState : (e : any) => void
}

const Link:React.FC<PropsType> = ({LinkList,onChangeLinkListState}) => {
    const [linkCount,setLinkCount] = useState(1)
    const getNameofInput = (index : number):nameOfInputType => {
        if(index === 0) return "secondLink"
        else return "thirdLink"
    }
    const addLinkInput = useCallback(
        () => {
            if(linkCount === maximumLinkCount) return;
            setLinkCount(linkCount+1)
        },[linkCount]
    )
    const onChangeLinkList = (e:ChangeEvent<HTMLInputElement>) => {
        onChangeLinkListState({
            ...LinkList,
            [e.target.name] : e.target.value
        })
    }
    const linkInputList = useMemo(
        () => (
            Array(linkCount -1).fill(void 0).map((item, index) => {
                const nameofInput:nameOfInputType = getNameofInput(index)
                return (
                    <input name={nameofInput} onChange={onChangeLinkList} value={LinkList[nameofInput]} key={index}  className="writeLink"/>
                )
            })
        ), [linkCount,LinkList]
    );
    return(
        <>
            <p className="link editTitle">웹사이트</p>
            <S.LinkList>
                <input className="writeLink" onChange={onChangeLinkList} value={LinkList.firstLink} name="firstLink"/>
                {linkInputList}
                {
                    linkCount < maximumLinkCount ?
                        <button className="addLink" onClick={addLinkInput}>
                            <img src={addLinkIcon}/>링크 추가
                        </button> : ""
                }
            </S.LinkList>
        </>
    )
}
export default Link