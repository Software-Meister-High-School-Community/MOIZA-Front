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

interface IFindIdKindProps {
  title: string;
}

export const IFindIdKind: IFindIdKindProps[] = [
  { title: "이메일 입력" },
  { title: "인증번호 입력" },
  { title: "아이디 찾기 결과" },
];
