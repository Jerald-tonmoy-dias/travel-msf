import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import Pdf from "react-to-pdf";



import {
  Title,
  MainWrapper,
  NextPrevWrapper,
} from "../Form.styled";

import { StoreContext } from "../../../context/Store";

import Navbar from "../../navbar/Navbar";


export default function Summary() {
  // gettting context value
  /******************************************
   *
   * GETTING CONTEXT VALUE
   *
   ******************************************/
  const theme = useContext(ThemeContext);
  let { setCountSteps } =
    useContext(StoreContext);

  /******************************************
   *
   *
   * VARIABLES AND STATES
   *
   *
   ******************************************/


  // create ref
  const ref = React.createRef();

  /******************************************
   *
   *
   * FUNCTIONS
   *
   *
   ******************************************/
  const nextpageFunction = () => {
    setCountSteps(7);
  };

  return (
    <div>
      <Navbar navItem={2}  />
      <Title color={theme.blackColor}>Summary of key details</Title>

      <MainWrapper ref={ref} liteBlackColor={theme.liteBlackColor}>
        <div className="add_product_section pdf_summary_wrapper">
          <p>
            Before we get your quotes, we've summarised the key details that you
            have told us, please check these are correct to ensure they meet
            your needs.
          </p>

          <hr />
        </div>
      </MainWrapper>

      <NextPrevWrapper
        whiteColor={theme.whiteColor}
        blackColor={theme.blackColor}
      >
        {/* <button type="button" onClick={nextpageFunction} className="btn next ">
          get quote
        </button> */}
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button className="btn next" onClick={toPdf}> get quote</button>}
        </Pdf>
      </NextPrevWrapper>
    </div>
  );
}
