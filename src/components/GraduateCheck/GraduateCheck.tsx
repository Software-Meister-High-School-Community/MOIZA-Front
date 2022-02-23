import React, { ReactElement, useState } from "react";
import * as GC from "./GraduateCheck.style";
import * as CONST from "./ConsTant/index";
import * as Imgs from "../../assets/img/index";
import GraduateCheckForm from "./GraduateCheckForm";
import GraduateCheckGuide from "./GraduateCheckGuide";
import GraduateCheckProcedure from "./GraduateCheckProcedure";

const Graduate: React.FC = () => {
  const [part, setPart] = useState("졸업생 인증 안내"); //일단은 인증절차가 간단해서 전역 사용 X

  const compList: ReactElement[] = [
    <GraduateCheckGuide setPart={setPart} />,
    <GraduateCheckForm />,
  ];

  const procedureImgs: string[] = [
    Imgs.GraduateCheckProcedure1,
    Imgs.GraduateCheckProcedure2,
  ];

  return (
    <GC.GraduateCheckBox>
      <GC.GraduateCheckTitle>졸업생 인증</GC.GraduateCheckTitle>
      <GC.GraduateCheckMiddleWrap>
        {procedureImgs.map((procedure, idx) => {
          return (
            <React.Fragment key={idx}>
              {part === CONST.GraduatePartList[idx] && (
                <GraduateCheckProcedure img={procedure} />
              )}
            </React.Fragment>
          );
        })}
        <GC.GraduateCheckFormsWrap>
          {compList.map((comp, idx) => {
            return (
              <React.Fragment key={idx}>
                {part === CONST.GraduatePartList[idx] && comp}
              </React.Fragment>
            );
          })}
        </GC.GraduateCheckFormsWrap>
      </GC.GraduateCheckMiddleWrap>
    </GC.GraduateCheckBox>
  );
};

export default Graduate;
