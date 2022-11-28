import styled from "styled-components";

export const GreatingSection = styled.nav(
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

export const ContentWrapper = styled.nav(
  (props) => `
  
  
  `
);
