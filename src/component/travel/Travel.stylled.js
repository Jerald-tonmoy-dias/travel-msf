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
// warning text
.warning-text {
  color: ${props.warningColor};
  font-size: 16px;
  font-weight: 700;
}

.sm-text {
font-size: 14px;
}
&:hover {
  background: rgba(247, 248, 249,.4);
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
`
);

export const RadioButtons = styled.div(
(props) => `
display:flex;
flex-wrap: wrap;

@media only screen and (max-width: 767px) {
  justify-content: center;
}

input[type="radio"] {
display: none;
}

label {
flex-basis: 17.33%;
text-align: center;
display:inline-block;
background: ${props.whiteColor};
color: ${props.blackColor};
text-transform: capitalize;
max-width:    380px;
font-weight: 700;
padding: 15px 40px;
border-radius: 5px;
cursor: pointer;
box-shadow: rgb(33 35 38 / 10%) 0px 1px 20px 0px;
margin: 0 10px 10px 0 ;
padding-top: 30px;
padding-bottom: 30px;
@media only screen and (max-width: 1200px) {
  flex-basis: 13.33%;
}
@media only screen and (max-width: 767px) {
  flex-basis: 23%;
}
@media only screen and (max-width: 425px) {
  flex-basis: 50%;
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
z-index: 1;
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
