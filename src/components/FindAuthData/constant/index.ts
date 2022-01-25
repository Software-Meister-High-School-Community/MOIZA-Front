interface IFindAuthDataKindProps {
  title: string;
  queryName: string;
}

export const FindAuthDataKind: IFindAuthDataKindProps[] = [
  {
    title: "아이디 찾기",
    queryName: "findid",
  },
  {
    title: "비밀번호 찾기",
    queryName: "findpw",
  },
];

interface IFindKindProps {
  title: string;
}

export const IFindIdKind: IFindKindProps[] = [
  { title: "이메일 입력" },
  { title: "인증번호 입력" },
  { title: "아이디 찾기 결과" },
];

export const IFindPwKind: IFindKindProps[] = [
  { title: "아이디 입력" },
  { title: "인증번호 입력" },
  { title: "비밀번호 재등록" },
  { title: "비밀번호 결과" },
];
