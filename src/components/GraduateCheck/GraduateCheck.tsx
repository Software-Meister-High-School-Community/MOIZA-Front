import { useState } from "react";
import * as GC from "./GraduateCheck.style";
import GraduateCheckForm from "./GraduateCheckForm";
import GraduateCheckGuide from "./GraduateCheckGuide";
import { GraduateCheckProcedureBox } from "./GraduateCheckProcedure/GraduateCheckProcedure.style";

const Graduate: React.FC = () => {
  const [part, setPart] = useState("졸업생 인증 안내"); //일단은 인증절차가 간단해서 전역 사용 X

  return (
    <GC.GraduateCheckBox>
      <GC.GraduateCheckTitle>졸업생 인증</GC.GraduateCheckTitle>
      <GC.GraduateCheckMiddleWrap>
        <GraduateCheckProcedureBox />
        <GC.GraduateCheckFormsWrap>
          <>
            {part === "졸업생 인증 안내" && (
              <GraduateCheckGuide setPart={setPart} />
            )}
          </>
          <>{part === "졸업 인증" && <GraduateCheckForm />}</>
        </GC.GraduateCheckFormsWrap>
      </GC.GraduateCheckMiddleWrap>
    </GC.GraduateCheckBox>
  );
};

export default Graduate;
