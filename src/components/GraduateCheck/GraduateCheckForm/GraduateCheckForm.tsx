import useGraduateCheck from "../../../hooks/graduateCheck/useGraduateCheck";
import { byteTransform } from "../../../util/byteTransform";
import * as GCF from "./GraduateCheckForm.style";
import * as Imgs from "../../../assets/img/index";
import { GraduateCheckFooterWrap } from "../GraduateCheck.style";
import SubmitButton from "../../Common/Button/SubmitButton";

const GraduateCheckForm: React.FC = () => {
  const { file, setFile, onChangeFile, handleUploadFile } = useGraduateCheck();

  return (
    <>
      <GCF.GraduateCheckFormBox>
        <GCF.GraduateCheckFormTitle>파일 첨부</GCF.GraduateCheckFormTitle>
        <input
          type="file"
          accept="image/*"
          id="graduateCheck-fileInput"
          onChange={(e) => onChangeFile(e)}
          disabled={file !== null}
        />
        <GCF.GraduateCheckFormInputLabel
          htmlFor="graduateCheck-fileInput"
          isNull={file === null}
        >
          {file !== null ? (
            <>
              <GCF.GraduateCheckFormFileInfoBar>
                <p>{file?.name}</p>
              </GCF.GraduateCheckFormFileInfoBar>
              <GCF.GraduateCheckFormFileSizeText>
                {byteTransform(file?.size)}
              </GCF.GraduateCheckFormFileSizeText>
              <GCF.GraduateCheckFormFileDeleteButton
                onClick={() => setFile(null)}
              >
                <img src={Imgs.GraduateCheckFileDelete} />
              </GCF.GraduateCheckFormFileDeleteButton>
            </>
          ) : (
            <GCF.GraduateCheckFormFileAddImg src={Imgs.GraduateCheckFileAdd} />
          )}
        </GCF.GraduateCheckFormInputLabel>
        <GCF.GruduateCheckFormGuideText>
          졸업사진, 졸업장, 학생증 등 재학 이력을 증명할 수 있는 사진은 무엇이든
          제출 가능합니다.
        </GCF.GruduateCheckFormGuideText>
      </GCF.GraduateCheckFormBox>
      <GraduateCheckFooterWrap>
        <SubmitButton
          big
          blue
          disable={file === null}
          text="인증 신청"
          handleClick={() => handleUploadFile()}
        />
      </GraduateCheckFooterWrap>
    </>
  );
};

export default GraduateCheckForm;
