import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { IGraduateCheckFile } from "../../interface/GraduateCheck/GraduateCheck.type";

const useGraduateCheck = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState<IGraduateCheckFile | null>(null);

  const onChangeFile = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      if (e.target.files && e.target.files.length) {
        setFile(e.target.files[0]);
      }
    },
    []
  );

  const handleUploadFile = useCallback(() => {
    //업로드 api 통신
    setFile(null);
    navigate("/graduateCheckSuccess");
  }, []);

  return {
    file,
    setFile,
    onChangeFile,
    handleUploadFile,
  };
};

export default useGraduateCheck;
