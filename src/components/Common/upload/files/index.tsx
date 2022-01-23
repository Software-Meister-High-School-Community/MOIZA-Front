import React, {ChangeEvent, useCallback, useMemo, useRef, useState} from 'react';
import * as S from './styles';
import addFile from '../../../../assets/img/Common/addFile.svg';
import removeFileIcon from '../../../../assets/img/Common/removeFile.svg';
import {UploadDataType} from "../../../../interface/Common/Common.type";

interface PropsType{
    state : UploadDataType
    setStateFunction : (e:UploadDataType) => void;
}

const UploadFiles:React.FC<PropsType> = ({state,setStateFunction}) => {
    const [fileListArr,setFileListArr] = useState(state.files);
    const UploadImgs = useCallback(
        (e:ChangeEvent<HTMLInputElement>) => {
            e.stopPropagation();
            const reader = new FileReader();
            const fileList = e.target.files;
            if(!fileList) return;
            const file = fileList[0];
            const fileInArr = Array.from(fileList);
            reader.onloadend = () => {
                setFileListArr(fileListArr.concat(fileInArr))
                setStateFunction({
                    ...state,
                    ["files"] : fileListArr.concat(fileInArr)
                })
            }
            if (file) reader.readAsDataURL(file);
        },[fileListArr]
    )
    const onClickRemoveFile = useCallback(
        (id : number) => {
            setFileListArr(fileListArr.filter((item,index) => index !== id))
        },[fileListArr]
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