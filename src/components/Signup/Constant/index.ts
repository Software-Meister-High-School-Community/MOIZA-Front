export const SchoolList: string[] = [
  "광주소프트웨어마이스터고등학교",
  "대구소프트웨어마이스터고등학교",
  "대덕소프트웨어마이스터고등학교",
  "미림마이스터고등학교",
  "부산소프트웨어마이스터고등학교",
];

interface ISexListProps {
  id: string;
  summary: string;
}

export const SexList: ISexListProps[] = [
  {
    id: "MALE",
    summary: "남성",
  },
  {
    id: "FEMALE",
    summary: "여성",
  },
];

export const UserTypeList: ISexListProps[] = [
  { id: "STUDENT", summary: "재학생" },
  { id: "USER", summary: "졸업생" },
];

export const SignupPartList: string[] = [
  "약관동의",
  "정보입력",
  "아이디 / 비밀번호",
];
