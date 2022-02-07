import React, { useCallback, useState } from "react";
import { IMakeComment } from "../../../interface/Post/Post.type";

const useComment = () => {
  const [makeCommentData, setMakeCommentData] = useState<IMakeComment>({
    text: "",
    picture: [],
  });

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setMakeCommentData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );

  return { makeCommentData, onChangeValue };
};

export default useComment;
