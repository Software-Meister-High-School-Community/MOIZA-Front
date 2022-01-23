import React, {ChangeEvent, useCallback, useMemo, useRef} from 'react';
import * as S from './styles';
import addFile from '../../../../assets/img/Common/addFile.svg';
import removeFileIcon from '../../../../assets/img/Common/removeFile.svg';

interface PropsType{
    state : any[]
    setStateFunction : (e:any) => void;
}

const UploadFiles:React.FC<PropsType> = ({state,setStateFunction}) => {
    const fileId = useRef<number>(0)
    const UploadImgs = useCallback(
        (e:ChangeEvent<HTMLInputElement>) => {
            e.stopPropagation();
            const reader = new FileReader();
            const fileList = e.target.files;
            if(!fileList) return;
            const file = fileList[0];
            const fileInArr = Array.from(fileList);
            reader.onloadend = () => {
                setStateFunction(
                    state.concat(fileInArr)
                )
            }
            if (file) reader.readAsDataURL(file)
        },[state]
    )
    const onClickRemoveFile = useCallback(
        (id : number) => {
            setStateFunction(state.filter((item,index) => index !== id))
        },[state]
    )
    const ImgList = useMemo(
        () => (
            state.map((item,index)=>(
                <S.PreView key={index}>
                    <img src={URL.createObjectURL(item)} />
                    <S.ImgInfo>
                        <p>{item.name}</p>
                        <button onClick={() => onClickRemoveFile(index)}><img src={removeFileIcon}/></button>
                    </S.ImgInfo>
                </S.PreView>
            ))
        ) ,[state]
    )

    return (
        <S.Wrapper>
            <S.Header>
                <h1>첨부파일</h1>
                <p>{state.length}/4</p>
            </S.Header>
            <S.Files>
                {ImgList}
                {state.length < 4 ?
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