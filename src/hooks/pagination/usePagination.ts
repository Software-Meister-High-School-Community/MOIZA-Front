import React,{useState} from "react";

export const usePagination = (value:number) => {
    const [posts, setPosts] = useState([]);
    const [limit, setLimit] = useState<number>(value);
    const [page, setPage] = useState<number>(1);
    const firstPoint:number = (page - 1) * limit;
    const showPosts = posts.slice(firstPoint,firstPoint + limit);

    return {
        posts,
        limit,
        page,
        showPosts,
        setPosts,
        setPage,
    }
}