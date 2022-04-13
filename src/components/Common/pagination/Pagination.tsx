import React from "react";
import * as P from "./Pagination.style";
import LeftArrow from "../../../assets/img/common/prevBtnIcon.svg";
import RightArrow from "../../../assets/img/common/nextBtnIcon.svg";
import { IPaginationProps } from "../../../interface/Common/Common.type";
const Pagination: React.FC<IPaginationProps> = ({
  total,
  limit,
  page,
  setPage,
}) => {
  const totalPages = Math.ceil(total / limit);
  return (
    <>
      <P.Container>
        <P.MoveButton
          src={LeftArrow}
          onClick={() => setPage(page === 1 ? page : page - 1)}
          disabled={page === 1}
        />
        {Array(totalPages)
          .fill(0)
          .map((_, i) => (
            <P.Button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              current={page === i + 1}
            >
              {i + 1}
            </P.Button>
          ))}
        <P.MoveButton
          src={RightArrow}
          onClick={() => setPage(page === totalPages ? page : page + 1)}
          disabled={page === totalPages}
        />
      </P.Container>
    </>
  );
};

export default Pagination;
