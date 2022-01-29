export const GraduatePartList: string[] = ["졸업생 인증 안내", "졸업 인증"];

interface IGraduateCheckLimitListProps {
  id: string;
  content: string;
}

export const GraduateCheckLimitList: IGraduateCheckLimitListProps[] = [
  {
    id: "graduateLimit1",
    content: "게시물 작성",
  },
  {
    id: "graduateLimit2",
    content: "게시물 답글작성",
  },
  {
    id: "graduateLimit3",
    content: "유저 팔로우",
  },
];
