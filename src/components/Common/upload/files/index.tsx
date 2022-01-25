import React, {ChangeEvent, useCallback, useMemo, useRef, useState} from 'react';
import * as S from './styles';
import addFile from '../../../../assets/img/Common/addFile.svg';
import removeFileIcon from '../../../../assets/img/Common/removeFile.svg';
import {UploadDataType} from "../../../../interface/Common/Common.type";
import {stat} from "fs";

interface PropsType{
    state : UploadDataType
    setStateFunction : (e:UploadDataType) => void;
}

const UploadFiles:React.FC<PropsType> = ({state,setStateFunction}) => {
    const fileListArr = state.files
    const UploadImgs = useCallback(
        (e:ChangeEvent<HTMLInputElement>) => {
            e.stopPropagation();
            const reader = new FileReader();
            const fileList = e.target.files;
            if(!fileList) return;
            const file = fileList[0];
            const fileInArr = Array.from(fileList); // 객체형태로 되어있는 파일 정보를 배열로 바꿈
            if(state.files.length + fileInArr.length > 4) alert("파일은 최대 4개까지만 업로드 가능합니다.")
            reader.onloadend = () => {
                setStateFunction({
                    ...state,
                    ["files"] : fileListArr.concat(fileInArr.filter((item,index)=> (state.files.length + (index+1)) <= 4))
                })
            }
            if (file) reader.readAsDataURL(file);
        },[fileListArr, state]
    )
    const onClickRemoveFile = useCallback(
        (id : number) => {
            setStateFunction({
                ...state,
                ["files"] : state.files.filter((item,index)=>index !== id)
            });
        },[fileListArr, state, setStateFunction]
    )
    const ImgList = useMemo(
        () => (
            fileListArr.map((item,index)=>(
                <S.PreView key={index}>
                    <img src={URL.createObjectURL(item)} />
                    <S.ImgInfo>
                        <p>{item.name}</p>
                        <button onClick={() => onClickRemoveFile(index)}><img src={removeFileIcon}/></button>
                    </S.ImgInfo>
                </S.PreView>
            ))
        ) ,[fileListArr]
    )

    return (
        <S.Wrapper>
            <S.Header>
                <h1>첨부파일</h1>
                <p>{fileListArr.length}/4</p>
            </S.Header>
            <S.Files>
                {ImgList}
                {fileListArr.length < 4 ?
                    <S.AddFileButton>
                        <img src={addFile}/>
                        <input type="file" onChange={UploadImgs} multiple/>
                    </S.AddFileButton> : ''
                }
            </S.Files>
        </S.Wrapper>
    )
}
export default UploadFiles;