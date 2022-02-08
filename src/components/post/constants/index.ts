import { OptionArrType, PathType } from "../../../interface/Common/Common.type";

interface TypeArrType {
  id: string;
  summary: string;
}
export const TypeArr: TypeArrType[] = [
  {
    id: "all",
    summary: "전체",
  },
  {
    id: "question",
    summary: "질문",
  },
  {
    id: "nomal",
    summary: "일반",
  },
];

export const RadioTypeArr: TypeArrType[] = [
  {
    id: "question",
    summary: "질문",
  },
  {
    id: "nomal",
    summary: "일반",
  },
];

export const PostListPathArr: PathType[] = [
  {
    path: "카테고리",
    link: "/category",
  },
  {
    path: "Design",
    link: "/list/Design",
  },
];

export const PostWritePathArr: PathType[] = [
  {
    path: "카테고리",
    link: "/category",
  },
  {
    path: "Design",
    link: "/list/Design",
  },
  {
    path: "게시물작성",
    link: "'/postwrite/Design",
  },
];

export const OptionArr: OptionArrType[] = [
  {
    option: "최신 순",
  },
  {
    option: "오래된 순",
  },
  {
    option: "조회수 순",
  },
  {
    option: "좋아요 순",
  },
];
