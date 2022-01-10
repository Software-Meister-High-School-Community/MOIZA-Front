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
