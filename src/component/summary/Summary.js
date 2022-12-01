import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { StoreContext } from "../../context/Store";
import { Wrapper } from "../../styles/Global.styled";
import Navbar from "../navbar/Navbar";
import Pdf from "react-to-pdf";
import axios from "axios";
import { ContentWrapper } from "../travel/Travel.stylled";

export default function Summary() {
  /******************************************
   * GETTING CONTEXT VALUE
   ******************************************/
  const theme = useContext(ThemeContext);

  let { countSteps, setCountSteps, travelInsurance, setTravelInsurance } =
    useContext(StoreContext);

  /******************************************
   * VARIABLES AND STATES
   ******************************************/
   const [dataSuccess, setdataSuccess] = useState(false);
   const [showquoteButton, setshowquoteButton] = useState(false);

     // create ref
  const ref = React.createRef();
  /******************************************
   * FUNCTIONS
   ******************************************/
  // handle submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  const handleGetQuote = () => {
    const data = {
      insuranceData: travelInsurance,
    
    }

    const url ="https://google.com";

    return axios
      .post(url, data)
      .then((res) => {
        if (res.data === 'success') {
          setdataSuccess(true)
          setshowquoteButton(true);
        } else {
          setdataSuccess(false)
          setshowquoteButton(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // use effexct
  useEffect(() => {}, []);

  return (
    <>
      <Navbar navItem={2} />

      <Wrapper>
        {/* Your Data */}
        <ContentWrapper
          primaryColor={theme.primaryColor}
          secondaryColor={theme.secondaryColor}
          whiteColor={theme.whiteColor}
          grayColor={theme.grayColor}
          blackColor={theme.blackColor}
          liteprimaryColor={theme.liteprimaryColor}
          liteBlackColor={theme.liteBlackColor}
          litewhiteColor={theme.litewhiteColor}
          warningColor={theme.warningColor}
          hoverColor={theme.hoverColor}
          ref={ref}
        >
          <div className="left-side">
            <h2 className="section_header_title">Your quote summary</h2>
          </div>

          <div className="right-side">
            {/* Your email address */}
            <div className="single-card-wrapper">
              <div class="see_cover_details see_your_quote_summary">
                <p>
                  Before we get your quotes, we've summarised the key details
                  that you have told us, please check these are correct to
                  ensure they meet your needs.
                </p>
                <h4>CHECK YOUR ANSWERS</h4>
                <ul>
                  <li>
                    <span>Cover type</span>
                    <span>{travelInsurance.insuranceCover}</span>
                  </li>
                  {travelInsurance.countryList && (
                    <li>
                      <span>Destination</span>
                      {travelInsurance.countryList && (
                        <span>
                          {travelInsurance.countryList &&
                            travelInsurance.countryList.map((item) => {
                              <span>{item}</span>;
                            })}
                        </span>
                      )}
                      <span>
                  { travelInsurance.is_region_united_kingdom ==false ? "region united kingdom" : 
                    travelInsurance.is_region_europe == false ? "europe": 
                    travelInsurance.is_region_worldwide_excl_USA_canada_caribbean_Mexico == false ? "worldwide excl USA ,canada, caribbean,Mexico": 
                    travelInsurance.is_region_worldwide == false ? 'is_region_worldwide' : ''}
                              </span>
                    </li>
                  )}
                  <li>
                    <span>Cover start date</span>
                    <span>{travelInsurance.dateOftrip}</span>
                  </li>
                  <li>
                    <span>Duration of cover</span>
                    <span>{travelInsurance.monthsToCoverIns}</span>
                  </li>
       
                  <li>
                    <span>Who to insure</span>
                    <span>{travelInsurance.howWantToInsure}</span>
                  </li>
                  <li>
                    <span>Maximum Excess</span>
                    <span>{travelInsurance.maxExcess}</span>
                  </li>
                  <li>
                    <span>Cancellation Cover Limits</span>
                    <span>{travelInsurance.cancellationCover}</span>
                 
                  </li>
                  <li>
                    <span>Baggage Cover Limit</span>
                    <span>{travelInsurance.baggageCover}</span>
                  </li>
                  <li>
                    <span>Medical Cover Limit</span>
                    <span>{travelInsurance.medicalCover}</span>
                  </li>
              
                </ul>

                <p>
                  If you would like to receive a copy of the above key details
                  and more information about comparethemarket.com, select

                  <a href="#"> download</a> , <a href="#">email</a> or{" "}
                  <a href="#">post</a>.
                </p>
              </div>
            </div>
          </div>
        </ContentWrapper>

        {/* next page */}
        <ContentWrapper
          primaryColor={theme.primaryColor}
          secondaryColor={theme.secondaryColor}
          whiteColor={theme.whiteColor}
          grayColor={theme.grayColor}
          blackColor={theme.blackColor}
          liteprimaryColor={theme.liteprimaryColor}
          liteBlackColor={theme.liteBlackColor}
          litewhiteColor={theme.litewhiteColor}
          warningColor={theme.warningColor}
          hoverColor={theme.hoverColor}
        >
          <div className="left-side"></div>

          <div className="next-page-wrappper summary-next-page-wrapper">
            <button
              className="backPageBtn"
              onClick={() => {
                setCountSteps(1);
              }}
            >
              back
            </button>
            {showquoteButton === false ? 
            <button className="nextPageBtn" onClick={handleGetQuote}>
              get quotes
            </button>
            : null  
          }
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}
