import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "styled-components";
import { StoreContext } from "../../context/Store";
import { Wrapper } from "../../styles/Global.styled";
import {} from "../form/Form.styled";
import Navbar from "../navbar/Navbar";
import { GiHand } from "react-icons/gi";
import {
  IoInformationOutline,
  IoCloseOutline,
  IoCheckmarkCircle,
  IoCloseCircle,
  IoAdd,
  IoArrowForwardOutline,
  IoChevronDown,
  IoChevronUp,
  IoCaretDownCircleOutline,
} from "react-icons/io5";
import {
  Checkboxes,
  ContentWrapper,
  DateInput,
  GreatingSection,
  RadioButtons,
  SelectorInput,
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
  const [singleCountry, setsingleCountry] = useState("");
  const [showCountry, setshowCountry] = useState(true);
  const [showInfo, seteShowInfo] = useState(false);
  const [showCoverDetails, setshowCoverDetails] = useState(false);
  const [travellerCount, settravellerCount] = useState(2);
  const maxTravller = 10;
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

    /**
     * if showCountry === true then check  
          *  if travelInsurance.countryList == [] then  setvaludationError(true) else setvaludationError(false) 
  
     * 
     * else check 
     *      
          is_region_united_kingdom !=false

          is_region_europe !=false

          is_region_worldwide_excl_USA_canada_caribbean_Mexico !=false

          is_region_worldwide != false

    */

    if (
      travelInsurance.insuranceCover == "" ||
      // travelInsurance.region == "" ||
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
      ["countryList"]: [...travelInsurance.countryList, singleCountry],
    });
  };

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
            {/* What type of cover are you looking for?  ::dev-note:has-tooltip*/}
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

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>

            {/* Where are you going?  ::dev-note:has-tooltip*/}
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
                {showCountry == true ? (
                  <p>
                    Different countries or regions might need different levels
                    of cover, so it's important to tell us about all the
                    countries you're planning to travel to.
                  </p>
                ) : (
                  <p>
                    Tell us the region or regions you plan on visiting
                    throughout the period of your cover so we can make sure you
                    get accurate quotes and the right level of protection.
                  </p>
                )}
              </ToolTipWrapper>

              {showCountry === true
                ? [
                    <>
                      {/* country list */}
                      {travelInsurance.countryList &&
                        travelInsurance.countryList.map(
                          (countryName, index) => (
                            <ShowCountryList
                              primaryColor={theme.primaryColor}
                              warningColor={theme.warningColor}
                              secondaryColor={theme.secondaryColor}
                              grayColor={theme.grayColor}
                              whiteColor={theme.whiteColor}
                            >
                              <div className="show-country-list" key={index}>
                                <span className="country-name">
                                  {countryName}
                                </span>

                                <button
                                  onClick={() => {
                                    //  filter country list
                                    let filteredCountry =
                                      travelInsurance.countryList &&
                                      travelInsurance.countryList.filter(
                                        (item) => item !== countryName
                                      );
                                    console.log(filteredCountry);

                                    // set country list
                                    setTravelInsurance({
                                      ...travelInsurance,
                                      ["countryList"]: filteredCountry,
                                    });
                                  }}
                                  className="rmv-btn"
                                >
                                  remove
                                </button>
                              </div>
                            </ShowCountryList>
                          )
                        )}

                      {/* input wrapper */}
                      <TextInputs
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
                        <button onClick={addCountryList} className="add-btn">
                          add
                        </button>
                      </TextInputs>
                    </>,
                  ]
                : [
                    <>
                      <Checkboxes
                        primaryColor={theme.primaryColor}
                        whiteColor={theme.whiteColor}
                        blackColor={theme.blackColor}
                      >
                        {/* single item */}
                        <div className="termsCondInputWrapper">
                          <label
                            className="form-group"
                            id="checkbox_1"
                            for="forRegion1"
                          >
                            <input
                              onChange={(e) => {
                                setTravelInsurance({
                                  ...travelInsurance,
                                  [e.target.name]:
                                    !travelInsurance.is_region_united_kingdom,
                                });
                                toggleClassForHover("checkbox_1");
                              }}
                              id="forRegion1"
                              type="checkbox"
                              name="is_region_united_kingdom"
                              value={travelInsurance.is_region_united_kingdom}
                            />
                            <label for="forRegion1"></label>
                            <div className="text-content-wrapper">
                              <span className="region-name">
                                {" "}
                                United kingdom{" "}
                              </span>
                            </div>
                          </label>
                        </div>

                        {/* single item */}
                        <div className="termsCondInputWrapper">
                          <label
                            className="form-group"
                            id="checkbox_2"
                            for="forRegion2"
                          >
                            <input
                              onChange={(e) => {
                                setTravelInsurance({
                                  ...travelInsurance,
                                  [e.target.name]:
                                    !travelInsurance.is_region_europe,
                                });
                                toggleClassForHover("checkbox_2");
                              }}
                              id="forRegion2"
                              type="checkbox"
                              name="is_region_europe"
                              value={travelInsurance.is_region_europe}
                            />
                            <label for="forRegion2"></label>

                            <div className="text-content-wrapper">
                              <span className="region-name"> Europe</span>
                            </div>
                          </label>
                        </div>

                        {/* single item */}
                        <div className="termsCondInputWrapper">
                          <label
                            className="form-group"
                            id="checkbox_3"
                            for="forRegion_3"
                          >
                            <input
                              onChange={(e) => {
                                setTravelInsurance({
                                  ...travelInsurance,
                                  [e.target.name]:
                                    !travelInsurance.is_region_worldwide_excl_USA_canada_caribbean_Mexico,
                                });
                                toggleClassForHover("checkbox_3");
                              }}
                              id="forRegion_3"
                              type="checkbox"
                              name="is_region_worldwide_excl_USA_canada_caribbean_Mexico"
                              value={
                                travelInsurance.is_region_worldwide_excl_USA_canada_caribbean_Mexico
                              }
                            />
                            <label for="forRegion_3"></label>

                            <div className="text-content-wrapper">
                              <span className="region-name">
                                {" "}
                                Worldwide Excl. USA, Canada, Caribbean, Mexico
                              </span>
                            </div>
                          </label>
                        </div>

                        {/* single item */}
                        <div className="termsCondInputWrapper">
                          <label
                            className="form-group"
                            id="checkbox_4"
                            for="forRegion_4"
                          >
                            <input
                              onChange={(e) => {
                                setTravelInsurance({
                                  ...travelInsurance,
                                  [e.target.name]:
                                    !travelInsurance.is_region_worldwide,
                                });
                                toggleClassForHover("checkbox_4");
                              }}
                              id="forRegion_4"
                              type="checkbox"
                              name="is_region_worldwide"
                              value={travelInsurance.is_region_worldwide}
                            />
                            <label for="forRegion_4"></label>

                            <div className="text-content-wrapper">
                              <span className="region-name"> Worldwide </span>
                            </div>
                          </label>
                        </div>
                      </Checkboxes>
                    </>,
                  ]}

              {/* swithc between country and region */}
              <span
                className="toggleCountryRegion"
                onClick={() => {
                  setshowCountry(!showCountry);
                  // reset country and region
                  setTravelInsurance({
                    ...travelInsurance,
                    ["countryList"]: [],
                    ["is_region_united_kingdom"]: false,
                    ["is_region_europe"]: false,
                    ["is_region_worldwide_excl_USA_canada_caribbean_Mexico"]: false,
                    ["is_region_worldwide"]: false,
                  });
                }}
              >
                {showCountry == true
                  ? `Or Let us know which region you'll be visiting`
                  : `Or just tell us the country or countries`}
                <span className="icon">
                  <IoArrowForwardOutline />
                </span>
              </span>

              {/* click here to show info */}
              <span
                onClick={() => seteShowInfo(!showInfo)}
                className={`notsure ${showInfo === true ? "active" : ""}`}
              >
                Not sure?{" "}
              </span>

              {/* info content */}
              {showInfo === true
                ? [
                    <div className="notSureInfo">
                      <p>
                        <strong>Coronavirus (COVID-19) </strong>
                      </p>
                      <p>
                        <strong>
                          Please check the{" "}
                          <a
                            href="https://www.gov.uk/guidance/travel-abroad-from-england-during-coronavirus-covid-19"
                            target="_blank"
                          >
                            latest government travel advice
                          </a>{" "}
                          that sets out what you need to do, if anything, before
                          you travel abroad and before you return home. You
                          should also check the latest travel advice and entry
                          requirements for each country you visit or transit
                          through. Travel rules can potentially change at short
                          notice, so it's important to check the
                          <a
                            href="https://www.gov.uk/government/organisations/foreign-commonwealth-development-office"
                            target="_blank"
                          >
                            Foreign, Commonwealth &amp; Development Office
                            (FCDO)
                          </a>{" "}
                          for the latest information.
                        </strong>
                      </p>
                    </div>,
                  ]
                : null}

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.region == "" ? (
                  <span className="warning-text">{validationText}</span>
                ) : null
              ) : null}
            </div>

            {/* When are you going on your trip? */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">When are you going on your trip?</h4>
              </div>

              <DateInput
                primaryColor={theme.primaryColor}
                warningColor={theme.warningColor}
                secondaryColor={theme.secondaryColor}
                grayColor={theme.grayColor}
                whiteColor={theme.whiteColor}
              >
                <input
                  type="date"
                  name="dateOftrip"
                  onChange={handleOnChange}
                />
              </DateInput>

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.dateOftrip == "" ? (
                  <span className="warning-text">{validationText}</span>
                ) : null
              ) : null}
            </div>

            {/* For how many nights? */}
            {travelInsurance.insuranceCover &&
            travelInsurance.insuranceCover == "single trip"
              ? [
                  <div className="single-card-wrapper" id="travel_id_2">
                    {/* card title wrapper */}
                    <div className="card-title-wrapper">
                      <h4 className="title">For how many nights?</h4>
                    </div>

                    <DateInput
                      primaryColor={theme.primaryColor}
                      warningColor={theme.warningColor}
                      secondaryColor={theme.secondaryColor}
                      grayColor={theme.grayColor}
                      whiteColor={theme.whiteColor}
                    >
                      <input
                        type="date"
                        name="returnDateOftrip"
                        onChange={handleOnChange}
                      />
                    </DateInput>

                    {/* validation */}
                    {valudationError === true ? (
                      travelInsurance.returnDateOftrip == "" ? (
                        <span className="warning-text">{validationText}</span>
                      ) : null
                    ) : null}
                  </div>,
                ]
              : null}

            {/* Would you like to add cover for any of the following? (optional)*/}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">
                  Would you like to add cover for any of the following?
                  (optional)
                </h4>
              </div>

              <p>Select all that apply or leave it blank if none</p>

              <Checkboxes
                primaryColor={theme.primaryColor}
                whiteColor={theme.whiteColor}
                blackColor={theme.blackColor}
                componentName={"optional_ins_cover_wrapper"}
              >
                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="optionalInsCover_1"
                    for="is_gadget_cover"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]: !travelInsurance.is_gadget_cover,
                        });
                        toggleClassForHover("optionalInsCover_1");
                      }}
                      id="is_gadget_cover"
                      type="checkbox"
                      name="is_gadget_cover"
                      value={travelInsurance.is_gadget_cover}
                    />
                    <label for="is_gadget_cover"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Gadget cover </span>
                      <p className="sm-text">
                        Smartphones, laptops, cameras, and more…
                      </p>
                    </div>
                  </label>
                </div>

                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="optionalInsCover_2"
                    for="is_winter_sports_cover"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]:
                            !travelInsurance.is_winter_sports_cover,
                        });
                        toggleClassForHover("optionalInsCover_2");
                      }}
                      id="is_winter_sports_cover"
                      type="checkbox"
                      name="is_winter_sports_cover"
                      value={travelInsurance.is_winter_sports_cover}
                    />
                    <label for="is_winter_sports_cover"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Winter sports cover </span>
                      <p className="sm-text">
                        Skis, snowboards, ski pass, piste closure, and more…
                      </p>
                    </div>
                  </label>
                </div>

                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="optionalInsCover_3"
                    for="is_cruise_cover"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]: !travelInsurance.is_cruise_cover,
                        });
                        toggleClassForHover("optionalInsCover_3");
                      }}
                      id="is_cruise_cover"
                      type="checkbox"
                      name="is_cruise_cover"
                      value={travelInsurance.is_cruise_cover}
                    />
                    <label for="is_cruise_cover"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Cruise cover </span>
                      <p className="sm-text">
                        Cabin confinement, missed ports and more…
                      </p>
                    </div>
                  </label>
                </div>

                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="optionalInsCover_4"
                    for="is_business_trip_cover"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]:
                            !travelInsurance.is_business_trip_cover,
                        });
                        toggleClassForHover("optionalInsCover_4");
                      }}
                      id="is_business_trip_cover"
                      type="checkbox"
                      name="is_business_trip_cover"
                      value={travelInsurance.is_business_trip_cover}
                    />
                    <label for="is_business_trip_cover"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Business trip cover </span>
                      <p className="sm-text">
                        Business equipment, money, and more…
                      </p>
                    </div>
                  </label>
                </div>
              </Checkboxes>

              {/* click here to show info */}
              <span
                onClick={() => setshowCoverDetails(!showCoverDetails)}
                className={`notsure ${
                  showCoverDetails === true ? "active" : ""
                }`}
              >
                See cover details {"  "}
                {showCoverDetails == true ? <IoChevronUp /> : <IoChevronDown />}
              </span>

              {/* info content */}
              {showCoverDetails === true
                ? [
                    <div class="see_cover_details">
                      <p>
                        <strong>Gadget cover</strong>
                        <p>
                          Covers new, refurbished, and used gadgets* including
                          smartphones, laptops, cameras, and more.
                        </p>
                        <strong>What does gadget cover include?</strong>
                        <ul>
                          <li>Protection against loss, theft, and damage</li>
                          <li>Claim up to £1,000 per item</li>
                          <li>
                            Gadget cover for each traveller named on the policy
                          </li>
                        </ul>
                        <p>
                          The gadgets you want to insure must not already be
                          covered by another policy (including your home
                          insurance)
                        </p>
                        <p>
                          *You’ll need a receipt as proof of purchase when
                          making a claim.
                        </p>
                      </p>
                      <p>
                        <strong>Winter sports cover</strong>
                        <p>
                          Loss of ski equipment, pass, piste closure, and
                          avalanche delay.
                        </p>
                      </p>
                      <p>
                        <strong>Cruise cover</strong>
                        <p>
                          Missed port, unused excursions, emergency airlift and
                          cabin confinement.
                        </p>
                      </p>
                      <p>
                        <strong>Business trip cover</strong>
                        <p>Business equipment and business money.</p>
                        <p>
                          Don’t forget to check what each policy covers before
                          you buy.
                        </p>
                      </p>
                    </div>,
                  ]
                : null}

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.region == "" ? (
                  <span className="warning-text">{validationText}</span>
                ) : null
              ) : null}
            </div>

            {/* Who do you want to insure? ::dev-note:has-tooltip*/}
            <div className="single-card-wrapper" id="travel_id_3">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">Who do you want to insure?</h4>
                <button
                  onClick={() => toggleClassForHover("travel_id_3")}
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
                  <strong>A couple</strong>
                </p>
                <p>
                  Two adults aged 18 or over who live at the same address and
                  are in a relationship.
                </p>
                <p>
                  <strong>A family</strong>
                </p>
                <p>
                  One or two adults living at the same address plus at least one
                  child (up to a maximum of 9 if one adult is travelling). If
                  two adults are travelling under a family policy, they must be
                  a spouse/partner, and up to eight children can be added.
                </p>
                <p>
                  <strong>A group</strong>
                </p>
                <p>
                  Is a collection of individuals covered under a single policy
                  who are travelling together.
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
                  id="howWantToInsu_1"
                  name="howWantToInsure"
                  value="An individual"
                />
                <label htmlFor="howWantToInsu_1">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 60">
                    <rect width="100%" height="100%" fill="none"></rect>
                    <g class="Single_svg__currentLayer">
                      <path
                        class="Single_svg__st0"
                        d="M33.386 13.043c0 5.8 5.1 10.9 11.1 10.9 6.1 0 11.1-4.8 11.1-10.9 0-5.8-5.1-10.9-11.1-10.9-6.1 0-11.1 4.8-11.1 10.9zm-6.4 46.3v-13.4s2.5 1 2.5 5.1v9.1h29.9v-9.1c0-4 2.5-5.1 2.5-5.1v13.4h4.3v-20c-5.8-13.4-21.8-12.4-21.8-12.4s-15.7-.8-21.8 12.4v20h4.4z"
                      ></path>
                    </g>
                  </svg>
                  {/* title */}
                  <span className="input-title">An individual</span>
                </label>

                <input
                  onChange={handleOnChange}
                  type="radio"
                  id="howWantToInsu_2"
                  name="howWantToInsure"
                  value="A couple"
                />
                <label htmlFor="howWantToInsu_2">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 60">
                    <rect width="100%" height="100%" fill="none"></rect>
                    <g class="Couple_svg__currentLayer">
                      <g>
                        <path
                          class="Couple_svg__st0"
                          d="M26.2 22.8c6.1 0 11.1-4.8 11.1-10.9C37.3 6.1 32.2 1 26.2 1c-6.1 0-11.1 4.8-11.1 10.9 0 5.8 5 10.9 11.1 10.9zM58.2 22.8c6.1 0 11.1-4.8 11.1-10.9C69.3 6.1 64.2 1 58.2 1c-6.1 0-11.1 4.8-11.1 10.9 0 5.8 5 10.9 11.1 10.9zM58.3 25.8s-8.9-.4-15.9 5c-7-5.5-16.3-5-16.3-5S10.2 25 4.2 38.2V58h5V44.8s2 1 2 5.1V59h30v-9.1c0-1.8.4-3 1-3.8.6.8 1 2 1 3.8V59h30v-9.1c0-4 2-5.1 2-5.1V58h5V38.2c-6-13.4-21.9-12.4-21.9-12.4z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  {/* title */}
                  <span className="input-title">A couple</span>
                </label>
                <input
                  onChange={handleOnChange}
                  type="radio"
                  id="howWantToInsu_3"
                  name="howWantToInsure"
                  value="A family"
                />
                <label htmlFor="howWantToInsu_3">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 60">
                    <rect width="100%" height="100%" fill="none"></rect>
                    <g class="Family_svg__currentLayer">
                      <g>
                        <path
                          class="Family_svg__st0"
                          d="M32.271 22.229c6.1 0 11.1-4.8 11.1-10.9 0-5.8-5.1-10.9-11.1-10.9-6.1 0-11.1 4.8-11.1 10.9-.1 5.8 5 10.9 11.1 10.9zM59.871 34.329s-3.3-.2-6.9 1.1c-6.5-11.1-20.6-10.3-20.6-10.3s-15.6-.8-21.6 12.4v19.9h4v-13.2s3 1 3 5.1v9.1h29v-9.1c0-.4.1-.8.2-1.1.4.2 1.8 1.1 1.8 3.6v6.6h22v-6.6c0-2.9 2-3.7 2-3.7v9.3h3v-14.1c-4-9.7-15.9-9-15.9-9z"
                        ></path>
                        <path
                          class="Family_svg__st0"
                          d="M59.871 32.129c4.4 0 8.1-3.5 8.1-7.9 0-4.2-3.7-7.9-8.1-7.9s-8.1 3.5-8.1 7.9c0 4.3 3.7 7.9 8.1 7.9z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  {/* title */}
                  <span className="input-title">A family</span>
                </label>

                <input
                  onChange={handleOnChange}
                  type="radio"
                  id="howWantToInsu_4"
                  name="howWantToInsure"
                  value="A group"
                />
                <label htmlFor="howWantToInsu_4">
                  {/* icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 60">
                    <rect width="100%" height="100%" fill="none"></rect>
                    <g class="Group_svg__currentLayer">
                      <g>
                        <path
                          class="Group_svg__st0"
                          d="M19.667 25.478c4.4 0 8.1-3.5 8.1-7.9 0-4.2-3.7-7.9-8.1-7.9s-8.1 3.5-8.1 7.9c0 4.3 3.7 7.9 8.1 7.9zM42.867 25.478c4.4 0 8.1-3.5 8.1-7.9 0-4.2-3.7-7.9-8.1-7.9s-8.1 3.5-8.1 7.9c0 4.3 3.7 7.9 8.1 7.9zM66.067 27.678s-6.4-.3-11.5 3.6c-5.1-4-11.7-3.6-11.7-3.6s-6.4-.3-11.5 3.6c-5-4-11.7-3.6-11.7-3.6s-11.4-.6-15.8 9v14.1h3v-9.3s2 .7 2 3.7v6.6h22v-6.6c0-1.3.1-2.2.5-2.7.4.6.5 1.4.5 2.7v6.6h22v-6.6c0-1.3.1-2.2.5-2.7.4.6.5 1.4.5 2.7v6.6h22v-6.6c0-3 2-3.7 2-3.7v9.3h3v-14.1c-4.2-9.7-15.8-9-15.8-9zM66.067 25.478c4.4 0 8.1-3.5 8.1-7.9 0-4.2-3.7-7.9-8.1-7.9s-8.1 3.5-8.1 7.9c0 4.3 3.7 7.9 8.1 7.9z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  {/* title */}
                  <span className="input-title">A group</span>
                </label>
              </RadioButtons>

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>

            {/* show if individual*/}
            {travelInsurance.howWantToInsure == "An individual" ? (
              <div className="single-card-wrapper">
                {/* card title wrapper */}
                <div className="card-title-wrapper">
                  <h4 className="title">Traveller born</h4>
                </div>
                <DateInput
                  primaryColor={theme.primaryColor}
                  warningColor={theme.warningColor}
                  secondaryColor={theme.secondaryColor}
                  grayColor={theme.grayColor}
                  whiteColor={theme.whiteColor}
                >
                  <input
                    type="date"
                    name="firstTravellerBorn"
                    onChange={handleOnChange}
                  />
                </DateInput>

                {/* validation */}
                {valudationError === true ? (
                  travelInsurance.dateOftrip == "" ? (
                    <span className="warning-text">{validationText}</span>
                  ) : null
                ) : null}
              </div>
            ) : null}
            {/* show if couple */}
            {travelInsurance.howWantToInsure == "A couple"
              ? [
                  <>
                    <div className="single-card-wrapper">
                      {/* card title wrapper */}
                      <div className="card-title-wrapper">
                        <h4 className="title">First traveller (adult) born</h4>
                      </div>
                      <DateInput
                        primaryColor={theme.primaryColor}
                        warningColor={theme.warningColor}
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        whiteColor={theme.whiteColor}
                      >
                        <input
                          type="date"
                          name="firstTravellerBorn"
                          onChange={handleOnChange}
                        />
                      </DateInput>

                      {/* validation */}
                      {valudationError === true ? (
                        travelInsurance.dateOftrip == "" ? (
                          <span className="warning-text">{validationText}</span>
                        ) : null
                      ) : null}
                    </div>
                    <div className="single-card-wrapper">
                      {/* card title wrapper */}
                      <div className="card-title-wrapper">
                        <h4 className="title">Second traveller (adult) born</h4>
                      </div>
                      <DateInput
                        primaryColor={theme.primaryColor}
                        warningColor={theme.warningColor}
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        whiteColor={theme.whiteColor}
                      >
                        <input
                          type="date"
                          name="secondTravellerBorn"
                          onChange={handleOnChange}
                        />
                      </DateInput>

                      {/* validation */}
                      {valudationError === true ? (
                        travelInsurance.dateOftrip == "" ? (
                          <span className="warning-text">{validationText}</span>
                        ) : null
                      ) : null}
                    </div>
                  </>,
                ]
              : null}
            {/* show if couple */}
            {travelInsurance.howWantToInsure == "A family"
              ? [
                  <>
                    <div className="single-card-wrapper">
                      {/* card title wrapper */}
                      <div className="card-title-wrapper">
                        <h4 className="title">First traveller (adult) born</h4>
                      </div>
                      <DateInput
                        primaryColor={theme.primaryColor}
                        warningColor={theme.warningColor}
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        whiteColor={theme.whiteColor}
                      >
                        <input
                          type="date"
                          name="firstTravellerBorn"
                          onChange={handleOnChange}
                        />
                      </DateInput>

                      {/* validation */}
                      {valudationError === true ? (
                        travelInsurance.dateOftrip == "" ? (
                          <span className="warning-text">{validationText}</span>
                        ) : null
                      ) : null}
                    </div>
                    <div className="single-card-wrapper">
                      {/* card title wrapper */}
                      <div className="card-title-wrapper">
                        <h4 className="title">Second traveller (adult) born</h4>
                      </div>
                      <DateInput
                        primaryColor={theme.primaryColor}
                        warningColor={theme.warningColor}
                        secondaryColor={theme.secondaryColor}
                        grayColor={theme.grayColor}
                        whiteColor={theme.whiteColor}
                      >
                        <input
                          type="date"
                          name="secondTravellerBorn"
                          onChange={handleOnChange}
                        />
                      </DateInput>

                      {/* validation */}
                      {valudationError === true ? (
                        travelInsurance.dateOftrip == "" ? (
                          <span className="warning-text">{validationText}</span>
                        ) : null
                      ) : null}
                    </div>
                    {travellerCount == 2 ? (
                      <div className="single-card-wrapper">
                        {/* card title wrapper */}
                        <div className="card-title-wrapper">
                          <h4 className="title">
                            Second traveller (adult) born
                          </h4>
                        </div>
                        <DateInput
                          primaryColor={theme.primaryColor}
                          warningColor={theme.warningColor}
                          secondaryColor={theme.secondaryColor}
                          grayColor={theme.grayColor}
                          whiteColor={theme.whiteColor}
                        >
                          <input
                            type="date"
                            name="secondTravellerBorn"
                            onChange={handleOnChange}
                          />
                        </DateInput>

                        {/* validation */}
                        {valudationError === true ? (
                          travelInsurance.dateOftrip == "" ? (
                            <span className="warning-text">
                              {validationText}
                            </span>
                          ) : null
                        ) : null}
                      </div>
                    ) : null}
                  </>,
                ]
              : null}

            {/* add another traveller */}
            {travelInsurance.howWantToInsure == "A family" ||
            travelInsurance.howWantToInsure == "A group" ? (
              <div className="single-card-wrapper">
                <span className="add-another-traveller">
                  add another traveller
                </span>
              </div>
            ) : null}
          </div>
        </ContentWrapper>

        {/* Cover details */}
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
            <h2 className="section_header_title">Cover details</h2>
          </div>

          <div className="right-side">
            {/* What is the maximum excess you’d like to pay should you need to make a claim? */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="text-content-wrapper-para">
                <p>
                  What is the <strong>maximum excess</strong> you’d like to pay
                  should you need to make a claim?
                </p>
                <p className="sm-text">
                  The excess you pay would be per person, per claim e.g. if you
                  select an excess of £50 and need to claim for 2 people
                  travelling, the total excess you’d pay would be £100.
                </p>
              </div>

              <SelectorInput
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
                <select
                  name="maxExcess"
                  className="selectClass"
                  onChange={handleOnChange}
                >
                  <option value="" disabled="">
                    Please select...
                  </option>
                  <option value="250">Up to £250</option>
                  <option value="200">Up to £200</option>
                  <option value="150">Up to £150</option>
                  <option value="100">Up to £100</option>
                  <option value="50">Up to £50</option>
                  <option value="0">No Excess</option>
                </select>
              </SelectorInput>

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>

            {/* How much cancellation cover do you need per person travelling? */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="text-content-wrapper-para">
                <p>
                  How much <strong>cancellation cover</strong> do you need per
                  person travelling?
                </p>
                <p className="sm-text">
                  How much cancellation cover do you need per person
                  travelling?.
                </p>
              </div>

              {/* selectorInput */}
              <SelectorInput
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
                <select
                  name="cancellationCover"
                  className="selectClass"
                  onChange={handleOnChange}
                >
                  <option value="" disabled="">
                    Please select...
                  </option>
                  <option value="750">At least £750</option>
                  <option value="1500">At least £1500</option>
                  <option value="3000">At least £3000</option>
                  <option value="4500">At least £4500</option>
                  <option value="6000">At least £6000</option>
                  <option value="7500">At least £7500</option>
                </select>
              </SelectorInput>

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>

            {/* What is the value of cover you require for your baggage? */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="text-content-wrapper-para">
                <p>
                  What is the value of cover you require for your{" "}
                  <strong>baggage</strong>?
                </p>
                <p className="sm-text">
                  This is the amount you can claim, per person, should your
                  baggage be lost or stolen or damaged.
                </p>
              </div>

              {/* selectorInput */}
              <SelectorInput
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
                <select
                  name="baggageCover"
                  className="selectClass"
                  onChange={handleOnChange}
                >
                  <option value="" disabled="">
                    Please select...
                  </option>
                  <option value="400">At least £400</option>
                  <option value="800">At least £800</option>
                  <option value="1600">At least £1600</option>
                  <option value="2400">At least £2400</option>
                  <option value="3200">At least £3200</option>
                  <option value="4000">At least £4000</option>
                </select>
              </SelectorInput>

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>
            {/* What is the maximum value of medical cover you need? */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="text-content-wrapper-para">
                <p>
                  What is the maximum value of <strong>maximum value</strong>{" "}
                  you need?
                </p>
                <p className="sm-text">
                  Medical cover is the maximum you could claim for your medical
                  bills, should you require medical treatment whilst abroad.
                </p>
              </div>

              {/* selectorInput */}
              <SelectorInput
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
                <select
                  name="medicalCover"
                  className="selectClass"
                  onChange={handleOnChange}
                >
                  <option value="Any">Any</option>
                  <option value="4">£4 million</option>
                  <option value="8">£8 million</option>
                  <option value="12">£12 million</option>
                  <option value="16">£16 million</option>
                  <option value="20">£20 million</option>
                </select>
              </SelectorInput>

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>
          </div>
        </ContentWrapper>

        {/* Your cover needs */}
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
            <h2 className="section_header_title">Your cover needs</h2>
          </div>

          <div className="right-side">
            {/* What is the maximum excess you’d like to pay should you need to make a claim? */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">
                  Does anyone in your party have a pre-existing medical
                  condition, or is anyone on a waiting list for treatment or
                  investigation?
                </h4>
              </div>

              <p>
                You do not need to declare pregnancy, however if you've
                experienced complications during your pregnancy we recommend you
                contact your provider before purchasing so this can be noted.
              </p>

              {/* input wrapper */}
              <RadioButtons
                primaryColor={theme.primaryColor}
                blackColor={theme.blackColor}
                whiteColor={theme.whiteColor}
              >
                <input
                  onChange={handleOnChange}
                  type="radio"
                  id="preMedicalCondition1"
                  name="preMedicalCondition"
                  value="Yes"
                />
                <label
                  className="only-text-label"
                  htmlFor="preMedicalCondition1"
                >
                  <span className="input-title">Yes</span>
                </label>

                <input
                  onChange={handleOnChange}
                  type="radio"
                  id="preMedicalCondition2"
                  name="preMedicalCondition"
                  value="NO"
                />
                <label
                  className="only-text-label"
                  htmlFor="preMedicalCondition2"
                >
                  <span className="input-title">No</span>
                </label>
              </RadioButtons>

              {/* show status  ::::dev_note:only change the state*/}
              {travelInsurance.insuranceCover !== "" ? (
                <div className={`show_input_status`}>
                  {" "}
                  <IoCheckmarkCircle />
                </div>
              ) : (
                [
                  valudationError === true ? (
                    travelInsurance.insuranceCover == "" ? (
                      <div className={`show_input_status warning`}>
                        {" "}
                        <IoCloseCircle />
                      </div>
                    ) : null
                  ) : null,
                ]
              )}

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>
          </div>
        </ContentWrapper>

        {/* Account details */}
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
            <h2 className="section_header_title">Account details</h2>
          </div>

          <div className="right-side">
            {/* Your email address */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">Your email address</h4>
              </div>

              <p>
                We will send you an email confirming your quotes and another to
                invite you to join or to let you know that you’ve automatically
                been given Meerkat Meals and Meerkat Movies once you have made a
                qualifying purchase.
              </p>

              {/* input wrapper */}
              <TextInputs
                primaryColor={theme.primaryColor}
                warningColor={theme.warningColor}
                secondaryColor={theme.secondaryColor}
                grayColor={theme.grayColor}
                whiteColor={theme.whiteColor}
              >
                <input
                  className="single-text-input"
                  placeholder="email@mail.com"
                  name="email"
                  type="email"
                  onChange={handleOnChange}
                />
              </TextInputs>

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>

            {/* What is your name? */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">What is your name?</h4>
              </div>

              <p>Your first name</p>

              {/* input wrapper */}
              <TextInputs
                primaryColor={theme.primaryColor}
                warningColor={theme.warningColor}
                secondaryColor={theme.secondaryColor}
                grayColor={theme.grayColor}
                whiteColor={theme.whiteColor}
              >
                <input
                  className="single-text-input"
                  placeholder="First name"
                  name="firstName"
                  type="text"
                  onChange={handleOnChange}
                />
              </TextInputs>

              <p>Your surname</p>

              {/* input wrapper */}
              <TextInputs
                primaryColor={theme.primaryColor}
                warningColor={theme.warningColor}
                secondaryColor={theme.secondaryColor}
                grayColor={theme.grayColor}
                whiteColor={theme.whiteColor}
              >
                <input
                  className="single-text-input"
                  placeholder="Surename"
                  name="lastName"
                  type="text"
                  onChange={handleOnChange}
                />
              </TextInputs>

              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>

            {/* We’ll do the work for you */}
            <div className="single-card-wrapper">
              {/* card title wrapper */}
              <div className="card-title-wrapper">
                <h4 className="title">We’ll do the work for you</h4>
              </div>

              <p>
                <strong>Make life simples</strong>
              </p>

              <p>
                We’ll send you renewal reminders to help you stay on top of your
                bills, the latest deals, and more ways to save you money.
              </p>

              <p>
                <strong>We’ll also send you</strong>
              </p>

              <p>
              The latest on how to claim Meerkat Rewards* such as restaurant discounts, and 2 for 1 cinema tickets.
              </p>

              <p>
                <strong>Choose how we contact you</strong>
              </p>

              <Checkboxes
                primaryColor={theme.primaryColor}
                whiteColor={theme.whiteColor}
                blackColor={theme.blackColor}
                componentName={"contact_with_wrapper"}
              >
                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="contactwith_1"
                    for="contactWithEmail"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]: !travelInsurance.contactWithEmail,
                          ['dontContact']: false,
                        });
                        toggleClassForHover("contactwith_1");
                      }}
                      id="contactWithEmail"
                      type="checkbox"
                      name="contactWithEmail"
                      value={travelInsurance.contactWithEmail}
                    />
                    <label for="contactWithEmail"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Email </span>
                    </div>
                  </label>
                </div>

                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="contactwith_2"
                    for="contactWithPhone"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]: !travelInsurance.contactWithPhone,
                          ['dontContact']: false,
                        });
                        toggleClassForHover("contactwith_2");
                      }}
                      id="contactWithPhone"
                      type="checkbox"
                      name="contactWithPhone"
                      value={travelInsurance.contactWithPhone}
                    />
                    <label for="contactWithPhone"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Phone </span>
                    </div>
                  </label>
                </div>

                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="contactwith_3"
                    for="contactWithText"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]: !travelInsurance.contactWithText,
                          ['dontContact']: false,
                        });
                        toggleClassForHover("contactwith_3");
                      }}
                      id="contactWithText"
                      type="checkbox"
                      name="contactWithText"
                      value={travelInsurance.contactWithPhone}
                    />
                    <label for="contactWithText"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Text </span>
                    </div>
                  </label>
                </div>

                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="contactwith_4"
                    for="contactWithPost"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]: !travelInsurance.contactWithPost,
                          ['dontContact']: false,
                        });
                        toggleClassForHover("contactwith_4");
                      }}
                      id="contactWithPost"
                      type="checkbox"
                      name="contactWithPost"
                      value={travelInsurance.contactWithPhone}
                    />
                    <label for="contactWithPost"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Post </span>
                    </div>
                  </label>
                </div>

                {/* single item */}
                <div className="termsCondInputWrapper">
                  <label
                    className="form-group"
                    id="contactwith_5"
                    for="dontContact"
                  >
                    <input
                      onChange={(e) => {
                        setTravelInsurance({
                          ...travelInsurance,
                          [e.target.name]: !travelInsurance.dontContact,
                          ['contactWithEmail']: false,
                          ['contactWithPhone']: false,
                          ['contactWithText']: false,
                          ['contactWithPost']: false
                        });
                        toggleClassForHover("contactwith_5");
                      }}
                      id="dontContact"
                      type="checkbox"
                      name="dontContact"
                      value={travelInsurance.contactWithPhone}
                    />
                    <label for="dontContact"></label>

                    <div className="text-content-wrapper">
                      <span className="region-name"> Do not contact </span>
                    </div>
                  </label>
                </div>

              </Checkboxes>
              {/* validation */}
              {valudationError === true ? (
                travelInsurance.insuranceCover == "" ? (
                  <>
                    <span className="warning-text">{validationText}</span>
                  </>
                ) : null
              ) : null}
            </div>
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}
