import React from "react";
import * as SP from "./SignupProcedure.style";

const SignupProcedure: React.FC<{ img: string }> = ({ img }) => {
  return <SP.SignupProcedureBox src={img} />;
};

export default SignupProcedure;
