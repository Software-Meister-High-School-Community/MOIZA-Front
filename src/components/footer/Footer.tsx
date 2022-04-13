import React from "react";
import footerLogo from "../../assets/img/MOIZALogo/koreanHorizontalTypeWhite.svg";
import * as F from "./Footer.style";

const Footer = () => {
  return (
    <F.Container>
      <F.ItemContainer>
        <F.LogoItem src={footerLogo} />
        <F.TextItem>
          이용약관&nbsp;&nbsp; | &nbsp;&nbsp;개인정보처리방침
        </F.TextItem>
      </F.ItemContainer>
      <F.ItemContainer>
        <F.TextItem>
          ©2022. 팀이름. All rights reserved&nbsp;&nbsp;&nbsp;&nbsp;
        </F.TextItem>
        <F.TextItem>sofmoiza@gmail.com</F.TextItem>
      </F.ItemContainer>
    </F.Container>
  );
};

export default Footer;
