import React,{useState} from "react";

export const usePagination = (value:number) => {
    const [posts, setPosts] = useState([]); // 보여줄 전체 데이터들
    const [limit, setLimit] = useState<number>(value); // 한 페이지당 몇개할지 
    const [page, setPage] = useState<number>(1); // 지금이 몇 페이지 
    const firstPoint:number = (page - 1) * limit; 
    const showPosts = posts.slice(firstPoint,firstPoint + limit); // 한 페이지에 보여줄 데이터들

    return {
        posts,
        limit,
        page,
        showPosts,
        setPosts,
        setPage,
    }
}