import React from "react";
import * as SResult from "./Result.style";
import PostResult from "./postResult/PostResult";
import UserResult from "./userResult/UserResult";
const Result = () => {
  return (
    <>
      <UserResult />
      <PostResult />
    </>
  );
};

export default Result;
