import React from "react";
import { GraduateCheckProcedureBox } from "./GraduateCheckProcedure.style";

const GraduateCheckProcedure: React.FC<{ img: string }> = ({ img }) => {
  return (
    <>
      <GraduateCheckProcedureBox src={img} />
    </>
  );
};

export default GraduateCheckProcedure;
