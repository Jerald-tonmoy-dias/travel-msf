import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { StoreContext } from "../../context/Store";
import { Wrapper } from "../../styles/Global.styled";
import {} from "../form/Form.styled";
import Navbar from "../navbar/Navbar";
import { GiHand } from "react-icons/gi";
import { GreatingSection } from "./Travel.stylled";
export default function Travel() {
  /******************************************
   * GETTING CONTEXT VALUE
   ******************************************/
  const theme = useContext(ThemeContext);

  let { countSteps, setCountSteps } = useContext(StoreContext);

  /******************************************
   * VARIABLES AND STATES
   ******************************************/

  /******************************************
   * FUNCTIONS
   ******************************************/

  return (
    <>
      <Navbar navItem={1} />

      <Wrapper>
        <GreatingSection 
            secondaryColor={theme.secondaryColor} 
            primaryColor={theme.primaryColor}
            liteprimaryColor={theme.liteprimaryColor}
            grayColor={theme.grayColor}
            liteBlackColor={theme.liteBlackColor}
            whiteColor={theme.whiteColor}
           
        >
          <div class="Section__content">
            <div
              class="HonestyNotice HonestyNotice__Content"
         
            >
              <GiHand />
         
              <p>
              <span class="HonestyNotice__Title">
                  Hi,
              </span>
                We're here to help you get the cover you need for your travel.
                Take care that the information you provide is accurate and
                complete to the best of your knowledge. If you don’t, your
                insurance provider could increase your premium, void your
                policy, refuse a claim or not pay the claim in full.
              </p>

            </div>
          </div>
        </GreatingSection>
      </Wrapper>
    </>
  );
}
