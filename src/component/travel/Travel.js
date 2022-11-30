import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { StoreContext } from "../../context/Store";
import { Wrapper } from "../../styles/Global.styled";
import { } from "../form/Form.styled";
import Navbar from "../navbar/Navbar";
import { GiHand } from "react-icons/gi";
import {
  IoInformationOutline,
  IoCloseOutline,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoAdd,
  IoArrowForwardOutline,
} from "react-icons/io5";
import {
  Checkboxes,
  ContentWrapper,
  GreatingSection,
  RadioButtons,
  ShowCountryList,
  TextInputs,
  ToolTipWrapper,
} from "./Travel.stylled";
import { toggleClassForHover } from "../../helper/helper";
export default function Travel() {
  /******************************************
   * GETTING CONTEXT VALUE
   ******************************************/
  const theme = useContext(ThemeContext);

  let { countSteps, setCountSteps, travelInsurance, setTravelInsurance } =
    useContext(StoreContext);

  /******************************************
   * VARIABLES AND STATES
   ******************************************/
  // valiation text
  const [validationText, setvalidationText] = useState(
    "Please answer this question in order to proceed."
  );
  const [valudationError, setvaludationError] = useState(false);
  const [singleCountry, setsingleCountry] = useState('');
  const [showCountry, setshowCountry] = useState(true);
  /******************************************
   * FUNCTIONS
   ******************************************/
  // handle onchange 
  const handleOnChange = (e) => {
    setTravelInsurance({ ...travelInsurance, [e.target.name]: e.target.value });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      travelInsurance.insuranceCover == "" ||
      travelInsurance.region == "" ||
      travelInsurance.dateOftrip == "" ||
      travelInsurance.monthsToCoverIns == "" ||
      travelInsurance.optionalInsuCover == "" ||
      travelInsurance.howWantToInsure == "" ||
      travelInsurance.maxExcess == "" ||
      travelInsurance.cancellationCover == "" ||
      travelInsurance.thirdPartyMedicalCondition == "" ||
      travelInsurance.valueBaggage == "" ||
      travelInsurance.email == "" ||
      travelInsurance.firstName == "" ||
      travelInsurance.lastName == "" ||
      travelInsurance.termsAgree == false
    ) {
      // fill up the info to go forward
      setvaludationError(true);
    } else {
      // go to next step
      setvaludationError(false);
      setCountSteps(2);
    }
  };

  // add country list to array
  const addCountryList = () => {
    setTravelInsurance({
      ...travelInsurance,
      ['countryList']: [...travelInsurance.countryList, singleCountry]
    }
    );
  }


  return (
    <>
      <Navbar navItem={1} />

      <Wrapper>
        {/* greeting section */}
        <GreatingSection
          primaryColor={theme.primaryColor}
          secondaryColor={theme.secondaryColor}
          whiteColor={theme.whiteColor}
          grayColor={theme.grayColor}
          blackColor={theme.blackColor}
          liteprimaryColor={theme.liteprimaryColor}
          liteBlackColor={theme.liteBlackColor}
          litewhiteColor={theme.litewhiteColor}
        >
          <div className="Section__content">
            <div className="HonestyNotice HonestyNotice__Content">
              <GiHand />

              <p>
                <span className="HonestyNotice__Title">Hi,</span>
                We're here to help you get the cover you need for your travel.
                Take care that the information you provide is accurate and
                complete to the best of your knowledge. If you don’t, your
                insurance provider could increase your premium, void your
                policy, refuse a claim or not pay the claim in full.
              </p>
            </div>
          </div>
        </GreatingSection>
        {/* Travel Insurance */}
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
          <div className="left-side">
            <h2 className="section_header_title">Travel Insurance</h2>
          </div>

          <div className="right-side">
            {/* What type of cover are you looking for? */}
            <div className="single-card-wrapper" id="travel_id_1">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">
                  What type of cover are you looking for?
                </h4>
                <button
                  onClick={() => toggleClassForHover("travel_id_1")}
                  className="tooltop-trigger-btn small-icon-btn"
                >
                  <IoInformationOutline className="openIcon" />
                  <IoCloseOutline className="closeIcon" />
                </button>
              </div>

              {/* tooltip */}
              <ToolTipWrapper
                primaryColor={theme.primaryColor}
                whiteColor={theme.whiteColor}
                blackColor={theme.blackColor}
              >
                <p>
                  {" "}
                  <strong>Not sure what cover you need?</strong>
                </p>
                <p>
                  <strong> Single Trip</strong> will cover you if you're
                  planning a one-off trip over specific dates. Your cover,
                  including any cancellation cover, will start immediately.
                </p>

                <p>
                  <strong> Annual Multi Trip </strong> will cover you if you're
                  going on multiple trips over a 12 month period. Your cover
                  will not begin until your chosen start date, including any
                  cancellation cover.
                </p>
                <p>
                  <strong> Backpacker/Long Stay Trip </strong> will cover you
                  for continuous travel, often to multiple countries, over a
                  prolongued period of time. Your cover, including any
                  cancellation cover, will start immediately.
                </p>
              </ToolTipWrapper>

              {/* input wrapper */}
              <RadioButtons
                primaryColor={theme.primaryColor}
                blackColor={theme.blackColor}
                whiteColor={theme.whiteColor}
              >
                <input
                  onChange={handleOnChange}
                  type="radio"
                  id="travelCover1"
                  name="insuranceCover"
                  value="single trip"
                />
                <label htmlFor="travelCover1">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 60">
                    <rect width="100%" height="100%" fill="none"></rect>
                    <g className="Single_svg__currentLayer">
                      <path
                        className="Single_svg__st0"
                        d="M61.398 6.795c1.2-1.2 4.8-.9 5.7.9.6 1.2 1.5 3.9.6 4.8-3.6 3.9-8.4 9-12 12.9 2.1 8.4 4.2 15.9 6.3 24.2-1.2 1.5-2.7 3-4.2 4.5-3.6-7.2-8.1-12.9-11.7-20-2.4 2.7-4.8 3.9-7.2 6.6-.3.3-.9.9-.6 1.5.3 2.1-.9 4.2-.6 6-1.2 1.2-2.1 2.4-3.3 3.3-1.2-2.7-1.2-5.4-2.7-7.8-2.4-1.5-6-1.5-8.4-2.7 1.2-1.2 2.1-2.1 3-3.3 2.1 0 5.4-.6 7.8-.6 2.7-3 4.2-6.9 6.9-9.9-6.6-3.9-14.7-6.3-21.2-10.2 1.5-1.5 2.7-4.2 4.2-5.7 8.1 2.4 17.4 5.7 25.7 8.1 3-3.6 8.1-8.7 11.7-12.6z"
                      ></path>
                    </g>
                  </svg>
                  {/* title */}
                  <span className="input-title">single trip</span>
                </label>

                <input
                  onChange={handleOnChange}
                  type="radio"
                  id="travelCover2"
                  name="insuranceCover"
                  value="annual multi trip"
                />
                <label htmlFor="travelCover2">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 60">
                    <rect width="100%" height="100%" fill="none"></rect>
                    <g className="Annual_svg__currentLayer">
                      <g>
                        <path
                          className="Annual_svg__st0"
                          d="M37.282 12.062c-2.9 3.1-7 7.2-9.4 10.1-6.7-1.9-14.2-4.6-20.7-6.5-1.2 1.2-2.2 3.4-3.4 4.6 5.3 3.1 11.8 5 17.1 8.2-2.2 2.4-3.4 5.5-5.5 7.9-1.9 0-4.6.5-6.2.5-.7 1-1.4 1.7-2.4 2.6 1.9 1 4.8 1 6.7 2.2 1.2 1.9 1.2 4.1 2.2 6.2 1-.7 1.7-1.7 2.6-2.6-.2-1.4.7-3.1.5-4.8-.2-.5.2-1 .5-1.2 1.9-2.2 3.8-3.1 5.8-5.3 2.9 5.8 6.5 10.3 9.4 16.1 1.2-1.2 2.4-2.4 3.4-3.6-1.7-6.7-3.4-12.7-5-19.5 2.9-3.1 6.7-7.2 9.6-10.3.7-.7 0-2.9-.5-3.8-.9-1.5-3.7-1.8-4.7-.8zM81.082 12.762c-.7-1.4-3.6-1.7-4.6-.7-2.9 3.1-7 7.2-9.4 10.1-6.7-1.9-14.2-4.6-20.7-6.5-1.2 1.2-2.2 3.4-3.4 4.6 5.3 3.1 11.8 5 17.1 8.2-2.2 2.4-3.4 5.5-5.5 7.9-1.9 0-4.6.5-6.2.5-.7 1-1.4 1.7-2.4 2.6 1.9 1 4.8 1 6.7 2.2 1.2 1.9 1.2 4.1 2.2 6.2 1-.7 1.7-1.7 2.6-2.6-.2-1.4.7-3.1.5-4.8-.2-.5.2-1 .5-1.2 1.9-2.2 3.8-3.1 5.8-5.3 2.9 5.8 6.5 10.3 9.4 16.1 1.2-1.2 2.4-2.4 3.4-3.6-1.7-6.7-3.4-12.7-5-19.5 2.9-3.1 6.7-7.2 9.6-10.3.6-.7-.1-2.9-.6-3.9z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  {/* title */}
                  <span className="input-title">annual multi trip</span>
                </label>

                <input
                  onChange={handleOnChange}
                  type="radio"
                  id="travelCover3"
                  name="insuranceCover"
                  value="long stay trip"
                />
                <label htmlFor="travelCover3">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 60">
                    <rect width="100%" height="100%" fill="none"></rect>
                    <g className="Backpacker_svg__currentLayer">
                      <g>
                        <path
                          className="Backpacker_svg__st0"
                          d="M47.981 1.709c-1.27.53-2.01 1.21-2.66 2.45-.32.62-.35.79-.35 2.15 0 1.44.01 1.51.44 2.29.53.97 1.33 1.74 2.3 2.19.64.31.89.35 2.08.35 1.2 0 1.44-.04 2.08-.35.98-.45 1.78-1.22 2.3-2.19.42-.79.44-.85.44-2.29s-.01-1.51-.44-2.29a5.02 5.02 0 0 0-2.3-2.19c-.6-.28-.95-.35-1.96-.39-1.03-.03-1.31.01-1.93.27zM32.401 10.019c-.4.13-.99.39-1.3.57-.68.41-1.6 1.38-1.84 1.97-.1.26-1.12 2.24-2.24 4.41-2.32 4.44-2.41 4.74-1.69 5.4.21.19.6.45.9.59.3.13.53.27.51.31 0 .04-.24.24-.53.46-.3.21-.67.64-.85.97-.26.49-.3.72-.26 1.56.05 1.15.41 1.81 1.29 2.39.48.32.64.36 1.65.36s1.17-.04 1.65-.36c.86-.57 1.24-1.25 1.29-2.37l.05-.94h.44c.26 0 .54-.12.75-.3.17-.15 1.74-3.04 3.47-6.4 3.35-6.47 3.45-6.74 2.97-7.44-.28-.39-1.21-.91-2.14-1.2-1.05-.3-3.09-.3-4.12.02zM42.431 10.809c-1.08.14-1.53.49-2.34 1.8-.39.62-.8 1.35-.91 1.62s-.28.58-.37.69c-.1.1-1.89 3.59-3.98 7.75l-3.81 7.55-2.57 7.52-2.57 7.52-2.56 4.17c-1.4 2.3-2.66 4.45-2.79 4.79-.21.53-.21.68-.08 1.16.3.95.63 1.38 1.47 1.78 1.06.5 1.72.58 2.52.31.45-.14.76-.36 1.02-.68 1.29-1.65 6.95-10.21 9.81-14.83 1.85-3.01 3.38-5.48 3.4-5.5s1.24 1.25 2.73 2.81c1.48 1.56 3.2 3.37 3.82 4.02l1.15 1.18.37 6.18c.22 3.4.44 6.38.51 6.64.36 1.38 1.89 1.99 3.64 1.47.8-.24 1.18-.59 1.57-1.42l.31-.64v-15.1l-2.03-2.61c-1.12-1.44-2.75-3.54-3.64-4.67s-1.75-2.3-1.9-2.6c-.4-.79-.36-1.67.1-2.59.21-.4.67-1.38 1.03-2.15.37-.79.72-1.51.77-1.62.1-.18.6-1.42.9-2.2l.13-.36 2.48 1.51 2.48 1.49 4.57 1.42c2.51.79 4.83 1.44 5.15 1.47.5.05.64 0 1.06-.33.6-.51 1-1.35 1-2.11 0-1.04-.13-1.12-5.68-3.45-4.13-1.72-4.99-2.12-5.16-2.42-2.99-5.34-3.4-6-4.3-6.9-1.49-1.51-1.6-1.56-4.03-2.2-1.2-.31-2.26-.55-2.36-.55-.09-.03-.49.02-.91.08z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  {/* title */}
                  <span className="input-title">long stay trip</span>
                </label>
              </RadioButtons>

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <span className="warning-text">{validationText}</span>
                ) : null
              ) : null}
            </div>

            {/* Where are you going?  */}
            <div className="single-card-wrapper" id="travel_id_2">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">Where are you going?</h4>
                <button
                  onClick={() => toggleClassForHover("travel_id_2")}
                  className="tooltop-trigger-btn small-icon-btn"
                >
                  <IoInformationOutline className="openIcon" />
                  <IoCloseOutline className="closeIcon" />
                </button>
              </div>

              {/* if region  */}
              {/* <p>Select the region you wish to be covered for</p> */}
              <p>Please tell us the country or resort below</p>

              {/* tooltip */}
              <ToolTipWrapper
                primaryColor={theme.primaryColor}
                whiteColor={theme.whiteColor}
                blackColor={theme.blackColor}
              >
                <p>
                  Tell us the region or regions you plan on visiting throughout
                  the period of your cover so we can make sure you get accurate
                  quotes and the right level of protection.
                </p>
              </ToolTipWrapper>

              {showCountry === true ? [
                <>
                  {/* country list */}
                  {
                    travelInsurance.countryList && travelInsurance.countryList.map((countryName, index) => (
                      <ShowCountryList
                        primaryColor={theme.primaryColor}
                        warningColor={theme.warningColor}
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        whiteColor={theme.whiteColor}
                      >
                        <div className="show-country-list" key={index}>
                          <span className="country-name">{countryName}</span>

                          <button onClick={() => {
                            //  filter country list
                            let filteredCountry = travelInsurance.countryList && travelInsurance.countryList.filter(item => item !== countryName);
                            console.log(filteredCountry);

                            // set country list
                            setTravelInsurance({
                              ...travelInsurance,
                              ['countryList']: filteredCountry
                            }
                            );

                          }}
                            className="rmv-btn">remove</button>
                        </div>
                      </ShowCountryList>
                    ))
                  }

                  {/* input wrapper */}
                  < TextInputs
                    primaryColor={theme.primaryColor}
                    warningColor={theme.warningColor}
                    secondaryColor={theme.secondaryColor}
                    grayColor={theme.grayColor}
                    whiteColor={theme.whiteColor}
                  >
                    <input
                      className="single-text-input"
                      placeholder="Enter the frist few letters"
                      onChange={(e) => {
                        setsingleCountry(e.target.value);
                      }}
                    />
                    <button onClick={addCountryList} className="add-btn">add</button>
                  </TextInputs>
                </>
              ] : [
                <>
                  <Checkboxes
                    primaryColor={theme.primaryColor}
                    whiteColor={theme.whiteColor}
                    blackColor={theme.blackColor}
                  >
                    {/* single item */}
                    <div className="termsCondInputWrapper">
                      <label className="form-group" id="checkbox_1" for="forRegion1">
                        <input
                          onChange={(e) => {
                            setTravelInsurance({
                              ...travelInsurance,
                              [e.target.name]: !travelInsurance.is_region_united_kingdom,

                            });
                            toggleClassForHover('checkbox_1');
                          }}
                          id="forRegion1"
                          type="checkbox"
                          name="is_region_united_kingdom"
                          defaultvalue={travelInsurance.is_region_united_kingdom}
                        />
                        <label for="forRegion1"></label>
                        <span className="region-name">  United kingdom</span>
                      </label>
                    </div>

                    {/* single item */}
                    <div className="termsCondInputWrapper">
                      <label className="form-group" id="checkbox_2" for="forRegion2">
                        <input
                          onChange={(e) => {
                            setTravelInsurance({
                              ...travelInsurance,
                              [e.target.name]: !travelInsurance.is_region_europe,

                            });
                            toggleClassForHover('checkbox_2');
                          }}
                          id="forRegion2"
                          type="checkbox"
                          name="is_region_europe"
                          value={travelInsurance.is_region_europe}
                        />
                        <label for="forRegion2"></label>
                        <span className="region-name">  Europe</span>
                      </label>
                    </div>

                    {/* single item */}
                    <div className="termsCondInputWrapper">
                      <label className="form-group" id="checkbox_3" for="forRegion_3">
                        <input
                          onChange={(e) => {
                            setTravelInsurance({
                              ...travelInsurance,
                              [e.target.name]: !travelInsurance.is_region_worldwide_excl_USA_canada_caribbean_Mexico,

                            });
                            toggleClassForHover('checkbox_3');
                          }}
                          id="forRegion_3"
                          type="checkbox"
                          name="is_region_worldwide_excl_USA_canada_caribbean_Mexico"
                          value={travelInsurance.is_region_worldwide_excl_USA_canada_caribbean_Mexico}
                        />
                        <label for="forRegion_3"></label>
                        <span className="region-name">  Worldwide Excl. USA, Canada, Caribbean, Mexico</span>
                      </label>
                    </div>

                    {/* single item */}
                    <div className="termsCondInputWrapper">
                      <label className="form-group" id="checkbox_4" for="forRegion_4">
                        <input
                          onChange={(e) => {
                            setTravelInsurance({
                              ...travelInsurance,
                              [e.target.name]: !travelInsurance.is_region_worldwide,

                            });
                            toggleClassForHover('checkbox_4');
                          }}
                          id="forRegion_4"
                          type="checkbox"
                          name="is_region_worldwide"
                          value={travelInsurance.is_region_worldwide}
                        />
                        <label for="forRegion_4"></label>
                        <span className="region-name">  Worldwide </span>
                      </label>
                    </div>

                  </Checkboxes>
                </>
              ]}

              <span className="toggleCountryRegion" onClick={() => {
                setshowCountry(!showCountry);
                // reset country and region
                setTravelInsurance({
                  ...travelInsurance,
                  ['countryList']: [],
                  ['is_region_united_kingdom']: false,
                  ['is_region_europe']: false,
                  ['is_region_worldwide_excl_USA_canada_caribbean_Mexico']: false,
                  ['is_region_worldwide']: false,

                });

              }}>
                {showCountry == true ? `Let us know which region you'll be visiting` : `Or just tell us the country or countries`}
                <span className="icon">
                  <IoArrowForwardOutline />
                </span>
              </span>

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.region == "" ? (
                  <span className="warning-text">{validationText}</span>
                ) : null
              ) : null}

            </div>

          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}
