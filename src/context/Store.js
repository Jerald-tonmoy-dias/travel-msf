import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { BASE_URL } from "../BaseUrl";
// creating context api
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  /**********************************
   *
   * GLOABL STATES
   *
   **********************************/
  //loading
  const [loading, setLoading] = useState(false);
  // not found data
  const [notFound, setnotFound] = useState(false);
  // all nav list

  // count steps
  const [countSteps, setCountSteps] = useState(1);
  // check value passed
  const [checkVehicle, setcheckVehicle] = useState(false);

  /**********************************
   *
   * YOUR VEHICLE STATES
   *
   **********************************/
  // get all vehicle data
  const [vehicleDetails, setvehicleDetails] = useState(null); //coming from api data
  // setVeicle data
  const [vehicleData, setVehicleData] = useState({
    typeOfAlarm: "", //select option
    tranckingDevice: "", //radio option
    imported: "", //radio option
    driveHand: "",
    isModified: false, //not assign yet
    modifiedCaused: "", //not assign yet
    leaseCarDate: "",
    usedCarFor: "",
    businessuseFor: "",
    whobusinessuseFor: "", //select
    annualBusinessMileage: "",
    annualPersonalMileage: "",
    keepCarAtDay: "",
    keepCarAtNight: "",
    carKeptAtHousehold: "",
    useAnyOtherVehicles: "",
  });
  // lease car date
  const [dontHvCar, setdontHvCar] = useState(false);
  // SDPC and Business Use
  const [sdpcBusinessUse, setsdpcBusinessUse] = useState(false);
  // keep car at night more option
  const [kepCarNightMoreOption, setkepCarNightMoreOption] = useState(false);

  /**********************************
   *
   * YOUR DETAILS
   *
   **********************************/
  const [yourDetails, setyourDetails] = useState({
    yourTitle: "",
    firstName: "",
    lastName: "",
    yourDateOfBirth: "",
    relationshipStatus: "",
    ownYourHome: "",
    childrenUnderAgeLiveWith: "",
    address: "",
    town_city: "",
    postcode: "",
    employment_status: "",
    employment_profession: "",
    livedInUk: "",
    typeOfLicence: "",
    howLongLicenceHeld: "",
    passedDrivingQualifications: "",
    typesOfDrivingQualifications: "",
    datesOfDrivingQualifications: "",
    hvMedicalConditions: "",
    DVLAknowMedicalConditions: "",
    insuranceDeclined: "",
    criminalConvictions: "",

    anyClaims: "",
    incidentOccur: "",
    damageSuffered: "", //if yes
    damagedAmount: "", // if damage was suffered selected
    claimedAgainstInsurance: "",
    claimedDiscountAffected: "",
    maxVoluntaryExcess: "",
  });

  const [allClaimedInsurance, setallClaimedInsurance] = useState([]);
  //employment_profession
  const [is_professionActive, setis_professionActive] = useState(false);
  const [isLicenceMore, setisLicenceMore] = useState(false);
  const [isLivedSinceBirth, setisLivedSinceBirth] = useState(false);

  /**********************************
   *
   * YOUR POLICY
   *
   **********************************/
  const [yourPolicy, setyourPolicy] = useState({
    mainDrive: "",
    AreYouregLegalOwner: "",
    whoRegKeeper: "",
    whoLegalOwner: "",
    typeOfCover: "",
    payForCarInsurance: "",
    NCDHaveYear: "",
    howEarnNCD: "",
    personalAccidentCover: "",
    courtesyCar: "",
    breakdownCover: "",
    motorLegalProtection: "",
    yourEmail: "",
    yourTelephoneNumber: "",
    insuranceProvidersAnswerQueries: "",
    refText: "",
    contactEmail: false,
    contactPhone: false,
    contactText: false,
    contactPost: false,
    doNotContact: false,
    TermsConditions: false,
  });

  // travelInsurance
  const [travelInsurance, setTravelInsurance] = useState({
    insuranceCover: "",
    countryList: [],
    is_gadget_cover: false,
    is_winter_sports_cover: false,
    is_cruise_cover: false,
    is_business_trip_cover: false,
    is_region_united_kingdom: false,
    is_region_europe: false,
    is_region_worldwide_excl_USA_canada_caribbean_Mexico: false,
    is_region_worldwide: false,
    dateOftrip: new Date(),
    monthsToCoverIns: "",
    dateOftrip: "",
    returnDateOftrip: "",
    howWantToInsure: "",
    firstTravellerBorn: "",
    secondTravellerBorn: "",
    thirdTravellerBorn: "",
    fouthTravellerBorn: "",
    fifthTravellerBorn: "",
    sixthTravellerBorn: "",
    sevenTravellerBorn: "",
    eightTravellerBorn: "",
    ninthTravellerBorn: "",
    tenthTravellerBorn: "",
    maxExcess: "",
    cancellationCover: "",
    baggageCover: "",
    dateOfBirthTraveller: [],
    valueBaggage: "",
    medicalCover: "",
    thirdPartyMedicalCondition: "",
    email: "",
    firstName: "",
    lastName: "",
    contactWithEmail: false,
    contactWithPhone: false,
    contactWithText: false,
    contactWithPost: false,
    dontContact: false,
    termsAgree: false

  });
  return (
    <StoreContext.Provider
      value={{
        // global states
        loading,
        setLoading,
        countSteps,
        setCountSteps,
        vehicleDetails,
        setvehicleDetails,
        notFound,
        setnotFound,
        checkVehicle,
        setcheckVehicle,

        // all vehicle data
        vehicleData,
        setVehicleData,
        dontHvCar,
        setdontHvCar,
        sdpcBusinessUse,
        setsdpcBusinessUse,
        kepCarNightMoreOption,
        setkepCarNightMoreOption,

        // your details
        yourDetails,
        setyourDetails,
        isLivedSinceBirth,
        setisLivedSinceBirth,
        isLicenceMore,
        setisLicenceMore,
        allClaimedInsurance,
        setallClaimedInsurance,

        // your policy
        yourPolicy,
        setyourPolicy,

        travelInsurance, setTravelInsurance
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
