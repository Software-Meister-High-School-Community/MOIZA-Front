import React, { useCallback, useState } from "react";
import { IMakeComment } from "../../../interface/Post/Post.type";

const useComment = () => {
  const [makeCommentData, setMakeCommentData] = useState<IMakeComment>({
    text: "",
    picture: [],
  });

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setMakeCommentData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const onChangeFile = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      if (e.target.files.length >= 4) {
        window.alert("사진은 최대 4장 가능합니다.");
        return;
      }
      const formData = new FormData();
      let count = 0;
      for (const file of Array.from(e.target.files)) {
        formData.append("img", file);
        const handleFile = {
          id: count,
          name: file.name,
        };
        setMakeCommentData((prev) => ({
          ...prev,
          picture: [...prev.picture, handleFile],
        }));
        count++;
      }
    }
  }, []);

  return { makeCommentData, onChangeValue, onChangeFile };
};

export default useComment;
