class schoolTransform {
  public schoolToEmail(mail: string): string {
    let schoolMail = "";
    switch (mail) {
      case "광주소프트웨어마이스터고등학교":
        schoolMail = "@gsm.hs.kr";
        break;
      case "대구소프트웨어마이스터고등학교":
        schoolMail = "@dgsw.hs.kr";
        break;
      case "대덕소프트웨어마이스터고등학교":
        schoolMail = "@dsm.hs.kr";
        break;

      case "미림마이스터고등학교":
        schoolMail = "@e-mirim.hs.kr";
        break;

      case "부산소프트웨어마이스터고등학교":
        schoolMail = "@bssm.hs.kr";
        break;

      default:
        schoolMail = "@gsm.hs.kr";
        break;
    }
    return schoolMail;
  }

  public schoolToAbbreviationName(school: string): string {
    let name = "";
    switch (school) {
      case "광주소프트웨어마이스터고등학교":
        name = "GSM";
        break;
      case "대구소프트웨어마이스터고등학교":
        name = "DGSW";
        break;
      case "대덕소프트웨어마이스터고등학교":
        name = "DSM";
        break;

      case "미림마이스터고등학교":
        name = "NCMM";
        break;

      case "부산소프트웨어마이스터고등학교":
        name = "BSSM";
        break;

      default:
        name = "GSM";
        break;
    }
    return name;
  }
}

export default new schoolTransform();
