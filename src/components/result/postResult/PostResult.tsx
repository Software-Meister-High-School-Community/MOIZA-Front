import React from "react";
import PostForm from "../../Common/postform/PostForm";
import * as PR from "./PostResult.style";
const PostResult = () => {
  return (
    <PR.Wapper>
      <PR.Title>게시물</PR.Title>
      <PR.Container>
        <PostForm />
      </PR.Container>
    </PR.Wapper>
  );
};

export default PostResult;
