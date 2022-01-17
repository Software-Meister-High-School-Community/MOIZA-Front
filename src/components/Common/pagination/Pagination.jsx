import React from 'react'
import * as P from './Pagination.style'
const Pagination = ({total, postsPerPage, page, setPage}) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(total / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
        
        <P.Container>
            {
                <P.Number></P.Number>
            }
        </P.Container>
    )
}

export default Pagination
