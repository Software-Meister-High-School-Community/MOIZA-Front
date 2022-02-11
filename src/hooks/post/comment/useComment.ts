import { useCallback, useState } from "react";
import { ICommnet } from "../../../interface/Post/Post.type";

const useComment = () => {
  const [makeCommentData, setMakeCommentData] = useState<ICommnet>({
    id: 0,
    name: "멩쓴쥬",
    studentState: "재학생",
    profileImg: "asdas",
    school: "미림마이스터고",
    createDate: "22/01/21  8:29",
    text: "",
    picture: [],
  });

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setMakeCommentData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  return {
    makeCommentData,
    onChangeValue,
  };
};

export default useComment;
