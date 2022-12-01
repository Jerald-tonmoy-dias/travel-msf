import React, { useContext } from "react";
import { FooterOne, HeaderOne } from "../layout/Layout.styled";
import { ThemeContext } from "styled-components";
import { Wrapper } from "../../styles/Global.styled";

export default function Footer() {
  const theme = useContext(ThemeContext);
  return (
    <FooterOne
      primaryColor={theme.primaryColor}
      whiteColor={theme.whiteColor}
      secondaryColor={theme.secondaryColor}
      blackColor={theme.blackColor}
    >
      <Wrapper>
        <div className="footer_section">
          <p>
            Important Information: quotemeeasy.co.uk does not offer financial
            advice in respect of Travel insurance products. If you are in any
            doubt as to whether this product is suitable for you, you should
            consider seeking independent financial advice. Please note that
            receiving a quote via quotemeeasy.co.uk does not guarantee that an
            insurer will accept you for the policy.
          </p>

          <p>
            All use of Defaqto Ratings is subject to{" "}
            <a href="#">licensed terms</a>
          </p>

          <p>
            Please note quotes are only available for residents of the UK and
            for trips which start from the UK. If you are a resident of the
            Channel Islands or Isle of Man some companies may offer you cover.
            Please check the policy wording before proceeding.
          </p>

          <p>
            The quotemeeasy.co.uk travel insurance comparison service is
            provided by theidol.com of The Edge, Eden Business Park, Penrith,
            Cumbria, CA11 9FB. theidol.com is a trading style of Investment
            Discounts On-Line Limited who are authorised and regulated by the{" "}
            <a href="#"> Financial Conduct Authority</a>. Investment Discounts
            On-Line Ltd is part of the Legal & General Group. theidol.com is not
            part of BGL Group Limited of which quotemeeasy.co.uk forms part.
          </p>

          <p>
            quotemeeasy.co.uk is a trading name of Compare The Market Limited.
            Registered in England No. 10636682. Registered Office: Pegasus
            House, Bakewell Road, Orton Southgate, Peterborough, PE2 6YS.
            Compare The Market Limited is authorised and regulated by the{" "}
            <a href="#"> Financial Conduct Authority</a> for insurance
            distribution (Firm Reference Number: 778488). Energy and Digital
            products are not regulated by the FCA.
          </p>

          <p>
            <strong>What you need to know about data</strong>
          </p>
          <p>
          A few important details are set out below about your data. You can find full details of how your data will be processed in our <a href="#">Privacy Policy</a> and <a href="#">Cookie Policy</a>, which you should read before entering your data. We may use your data for marketing and you will be given an opportunity to decide whether you wish to receive marketing from us.
          </p>
          <p>
          Some insurance providers may also use data that they already hold on you (for example, data from existing products, loyalty scheme data or transactional data) in order to assess and rate your cover and determine your premium.
          </p>
          <p>
          Some insurance providers may also use data that they already hold on you (for example, data from existing products, loyalty scheme data or transactional data) in order to assess and rate your cover and determine your premium.
          </p>
          <p>
          © quotemeeasy.co.uk, All rights reserved. <a href="#">Terms and Conditions</a>,<a href="#"> Privacy Policy</a> and <a href="#"> Cookie Policy</a>.
          </p>
          <p>
          *To obtain a reward, a qualifying product must be taken out. 1 membership per year.  <a href="#"> Rewards T&Cs apply</a>.
          </p>
          <p>
          <strong> Meerkat Meals:</strong> App only. Participating outlets. Restrictions, limitations & T&Cs apply.
          </p>
          <ul>
            <li><strong>Pizza Delivery: 50% off Pizzas</strong>, 7 days a week. £30 min spend, delivery fees & radius vary by outlet. Card only. Geographical restrictions may apply.</li>
            <li><strong>Dine out - 2 for 1:</strong>,Selected food, cheapest free. A la carte only. Sun–Thurs. Max 6 people. Kids meals and drinks excl.</li>
            <li><strong>Dine out - 25% off total bill:</strong>,Days available vary by outlet. Min & Max group sizes apply.</li>
            <li><strong>Caffè Nero:</strong>25% off barista-made drinks & pastries. App only. 2 codes per day.</li>
          </ul>
          <p><strong>Meerkat Movies:</strong> Participating cinemas. Tues or Weds. 2 standard tickets only, cheapest free.</p>
        </div>
      </Wrapper>
    </FooterOne>
  );
}
