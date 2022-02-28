import React, { useState } from "react";
import onHeart from "../../../../assets/img/common/onHeart.svg";
import offHeart from "../../../../assets/img/common/offHeart.svg";
import * as S from "./style";

export const HeartButton: React.FC = () => {
  const [liked, setLiked] = useState(false);

  const onClickHeart = () => {
    if (!liked) {
      setLiked(true);
      console.log("like");
    } else {
      setLiked(false);
      console.log("Not like");
    }
  };
  return (
    <S.PostHeart
      src={liked ? onHeart : offHeart}
      alt=""
      onClick={onClickHeart}
    />
  );
};

export default HeartButton;
