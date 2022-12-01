import styled from "styled-components";

export const GreatingSection = styled.div(
  (props) => `

margin: 30px 0;
.Section__content {
position: relative;
max-width: calc(9 / 12 * 100% - 200px);
margin-left: 200px;

@media only screen and (max-width: 1023px) {
max-width: 100%;
margin: 0 20px;
}

@media only screen and (max-width: 768px) {
display: none;
}
}
.HonestyNotice__Content {
position: relative;
padding-left: 40px;
}
.HonestyNotice svg {
position: absolute;
top: 10px; 
left: 0; 
width: 32px;
height: 32px;
color: ${props.primaryColor}
}
.HonestyNotice__Title {
font-size:18px;
font-weight:700;
margin-right: 10px;
color: ${props.primaryColor}
}


`
);

export const ContentWrapper = styled.div(
  (props) => `
// *************component own styles*********** //
display:flex;
margin-top: 40px;
@media (max-width: 992px) {
flex-direction: column;
flex-wrap: wrap;
}
// *************component global styles*********** //
.small-icon-btn {
height: 24px;
width: 24px;
border-radius: 50%;
line-height: 24px;
position: relative;
outline: none;
border: none;
margin: 0;
svg {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
}
}
// tooltip button
.tooltop-trigger-btn {
background: ${props.primaryColor};
color : ${props.whiteColor};
cursor: pointer;
display:inline-block;
font-weight: 700;
font-size: 18px;
&:hover {
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
}
}

// *************left side styles*********** //
.left-side {
flex-basis: 20%;

.section_header_title {
margin: 0;
margin-bottom: 30px;
color: ${props.primaryColor};
&:after {
content: "";
display: block;
width: 70px;
border-bottom: 2px solid;
margin-top: 18px;
}
}
}

// *************right side styles*********** //
.right-side {
max-width: calc(9 / 12 * 100% - 200px);
background: ${props.whiteColor};
flex-basis: 80%;
border-radius: 5px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
@media (max-width: 992px) {
max-width: calc(9 / 12 * 100% - 60px);
}
@media only screen and (max-width: 767px) {
max-width: 100%;
width: 100%;
}

// *************single card wrapper styles*********** //
.single-card-wrapper {
position: relative;
padding: 30px;
border-bottom: 1px solid #d1e3f4;

// text-content-wrapper-para
.text-content-wrapper-para {
  p {
    font-size: 18px;
    line-height: 1.5;
    strong {
      color: ${props.primaryColor};
    }
    &.sm-text {
      font-size: 14px;
    }
  }
}


// add-another-traveller
.add-another-traveller {
  color: ${props.primaryColor};
  font-weight: 700;
  font-size: 16px;
  text-transform: capitalize;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }

}

// see_cover_details
.see_cover_details {
p {
font-size: 14px;
line-height: 1.5;
strong {
font-size: 14px;
color: ${props.primaryColor};
}
}
ul li {
font-size: 14px;
}
}

// show_input_status
.show_input_status {
position:  absolute;
z-index: 0;
top: 50%;
right: 10px;
transform: translateY(-50%);
color : ${props.primaryColor};
font-size: 20px;
.warning {
color: ${props.warningColor};
}
}
// warning text
.warning-text {
color: ${props.warningColor};
font-size: 16px;
font-weight: 700;
}

.notsure {
display: flex;
align-items:center;
color: ${props.blackColor};
font-size: 14px;
font-weight: 700;
margin-top: 15px;
cursor: pointer;
&.active {
color: ${props.primaryColor};
}
&:hover {
color: ${props.primaryColor};
}
}

.notSureInfo {
background : ${props.grayColor};
padding : 10px 20px;
margin-top: 20px;
border-radius: 5px;
p {
font-size: 12px; 
line-height: 1.7;
a {
color: ${props.primaryColor};
}
}
}
.sm-text {
font-size: 14px;
margin: 0;
line-height: 1.2;
margin-top: 10px;
}
&:hover {
background: ${props.hoverColor};
}
&.active {
${ToolTipWrapper} {
display: block;
}
}

// tooltip design
${ToolTipWrapper} {
position: absolute;
right: -50%;
top: 0;
display: none;
&:after {
content: '';
position: absolute;
top: 11px;
left: -12px;
border-top: 12px solid transparent;
border-bottom: 12px solid transparent;
border-right: 12px solid ${props.primaryColor};
}

@media only screen and (max-width: 767px) {
position: static;
margin-bottom: 30px;
width: 90%;
&:after {
content: inherit;

}
}
}


// active class design
&.active {
.openIcon {
display:none;
}
.closeIcon {
display:block;
}
}
.openIcon {
display:block;
}
.closeIcon {
display:none;
}

// card-title-wrapper
.card-title-wrapper {
display: flex;
align-items: center;
margin-bottom: 20px;
}
.title {
display: inline-block;
font-size: 18px;
margin: 0;
margin-right: 20px;
color: ${props.primaryColor};
}

}

// toggleCountryRegion
.toggleCountryRegion {
display: block;
margin-top: 20px;
line-height: 1;
font-size: 16px;
cursor: pointer;
color: ${props.primaryColor};

.icon {
display: inline-block;
position: relative;
right: -9px;
top: 4px;

}
}
`
);

export const RadioButtons = styled.div(
  (props) => `
display:flex;
flex-wrap: wrap;

input[type="radio"] {
display: none;
}

label {
text-align: center;
display:inline-block;
background: ${props.whiteColor};
color: ${props.blackColor};
text-transform: capitalize;
max-width: 380px;
width: 18.33%;
font-weight: 700;
padding: 15px 35px;
border-radius: 5px;
cursor: pointer;
box-shadow: rgb(33 35 38 / 10%) 0px 1px 20px 0px;
margin: 0 10px 10px 0 ;
padding-top: 30px;
padding-bottom: 30px;
@media only screen and (max-width: 1200px) {
width: 15.33%;
}
@media only screen and (max-width: 992px) {
width: 31%;
}
@media only screen and (max-width: 768px) {
width: 90%;
}

.input-title {
color: ${props.blackColor};
font-size: 15px;
font-weight: 700;
display:block;
margin-top: 10px;
}

svg {
display:block;
width: 40px;
margin: 0 auto;
fill: ${props.blackColor};
}

&.lg-label {
text-align: justify;
font-weight: 400;

h4 {
margin: 0;
font-weight: 700;
}
}
}

input[type="radio"]:checked+label {
background: ${props.primaryColor};
color: ${props.whiteColor}
}

input[type="radio"]:checked+label .input-title {
color: ${props.whiteColor};
}

input[type="radio"]:checked+label svg {
fill: ${props.whiteColor};
}

}

`
);

export const ToolTipWrapper = styled.div(
  (props) => `
padding: 20px;
z-index: 99;
width: 44%;
background: ${props.whiteColor};
box-shadow: rgba(33, 35, 38, 0.1) 0px 0px 10px 2px;
border: 1px solid ${props.primaryColor};
border-radius: 5px;
border-radius: 5px;
color: ${props.color};
text-align: left;
p {
font-size: 14px;
font-weight: 400;
line-height: 1.5;
margin: 10px 0;
strong {
font-weight: 700;
}
}

`
);

export const TextInputs = styled.div(
  (props) => `
.single-text-input {
border: 1px solid ${props.primaryColor};
border-bottom-width: 4px;
height: 56px;
line-height: 1;
font-weight: bold;
padding: 0px 17px;
max-width: 100%;
width: 54%;
border-radius: 3px;
color: ${props.primaryColor};
outline: none;
background: ${props.hoverColor};
&:focus {
border: 1px solid ${props.primaryColor};
border-bottom-width: 4px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
background: ${props.whiteColor};
}

@media only screen and (max-width: 425px) {
height: 43px;
}
}
.add-btn {
position: relative;
left: -10px;
top: 1px;
border: 1px solid ${props.primaryColor};
height: 62px;
line-height: 1;
font-weight: bold;
padding: 0px 17px;
background: ${props.primaryColor};
color: ${props.whiteColor};
text-transform: capitalize;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
cursor: pointer;
@media only screen and (max-width: 425px) {
height: 48px;
}
}
`
);
export const ShowCountryList = styled.div(
  (props) => `
margin-bottom: 20px;
.show-country-list {
display:flex;
justify-content: space-between;
align-items: center;
margin: 5px;
flex-wrap: wrap;

.country-name {
text-transform: capitalize;
font-weight: 700;
font-size: 14px;
}

.rmv-btn {
color: ${props.primaryColor};
text-transform: capitalize;
font-weight: 700;
font-size: 16px;
border: none;
outline: none;
background: transparent;
cursor: pointer;
padding: 4px;

&:hover {
background: ${props.primaryColor};
border-radius: 5px;
color: ${props.whiteColor};
}
}
`
);


export const Checkboxes = styled.div(
  (props) => `

.termsCondInputWrapper {
margin-top: 20px;
.form-group {
display:flex;
align-items: flex-start;

cursor: pointer;
padding: 12px;
border: 2px solid ${props.primaryColor};
border-radius: 5px;
.text-content-wrapper {
margin-left: 15px;
}
.region-name {
font-size:  18px;
color: ${props.primaryColor};
font-weight: 700;
position: relative;
top: 3px;
}
&.active {
background: ${props.primaryColor};
.region-name,.sm-text {
color: ${props.whiteColor};
}
}
}
.form-group input {
padding: 0;
height: initial;
width: initial;
margin-bottom: 0;
display: none;
cursor: pointer;
}

.form-group label {
position: relative;
cursor: pointer;
display:flex;
}

.form-group label:before {
content:'';
-webkit-appearance: none;
border: 2px solid ${props.primaryColor};
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
padding: 15px;
display: inline-block;
position: relative;
vertical-align: middle;
cursor: pointer;
margin-right: 5px;
border-radius: 5px;
}

.form-group input:checked + label:before {
background: ${props.whiteColor};
}

.form-group input:checked + label:after {
content: '';
display: block;
position: absolute;
top: 6px;
left: 14px;
width: 6px;
height: 14px;
border: solid ${props.primaryColor};
border-width: 0 2px 2px 0;
transform: rotate(45deg);

}
}


${props.componentName === "optional_ins_cover_wrapper" ? [
      `
display:flex;
flex-wrap: wrap;
align-items: flex-start;
.termsCondInputWrapper {
width: 47%;
margin-right: 10px;
@media only screen and (max-width: 992px) {
width: 90%;
}
}

`
    ] : null}


`
);

export const DateInput = styled.div(
  (props) => `
input {
border: 1px solid ${props.primaryColor};
border-bottom-width: 4px;
height: 58px;
line-height: 1;
font-weight: bold;
padding: 0px 17px;
max-width: 100%;
width: 23%;
border-radius: 3px;
color: ${props.primaryColor};
outline: none;
background: ${props.hoverColor};
&:focus {
border: 1px solid ${props.primaryColor};
border-bottom-width: 4px;
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
background: ${props.whiteColor};
}
@media only screen and (max-width: 425px) {
width: 47%;
}
}
`
);


export const SelectorInput = styled.div(props => (`
   .selectClass {
     max-width: 380px;
    padding-bottom: 0.5px;
    padding-right: 37px;
    -webkit-appearance: none;
    background-size: 17px 17px;
    background-repeat: no-repeat;
    background-position: center right 10px;
    text-overflow: ellipsis;
    width: 100%;
    height: 56px;
    padding: 0 10px;
    border: 1px solid ${props.primaryColor};
    border-bottom-width: 4px;
    color: ${props.blackColor};
    background-color: ${props.whiteColor};
    font-size: 15px;
    font-weight: bold;
    line-height: 24px;
    border-radius: 3px;
    box-shadow: none;
    transition: color 0.25s, background-color 0.25s, border 0.25s, box-shadow 0.25s;
    margin-top: 30px;
    &:focus-visible {
    outline: none;
    }
    }


`));