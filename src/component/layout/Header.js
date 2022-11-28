import React, { useContext } from "react";
import { HeaderOne } from "../layout/Layout.styled";
import { ThemeContext } from "styled-components";
import { Wrapper } from "../../styles/Global.styled";

export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <HeaderOne primaryColor={theme.primaryColor} whiteColor={theme.whiteColor}  secondaryColor={theme.secondaryColor}>
      <Wrapper>
        <div className="travel-header-wrapper">
          <span className="logo">quotemeeasy</span>
          <span className="header-title">Travel insurance</span>
        </div>
      </Wrapper>
    </HeaderOne>
  );
}
