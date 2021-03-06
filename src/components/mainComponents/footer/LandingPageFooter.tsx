import React from "react";
import styled from "styled-components";

const StyledFooterWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  height: 240px;
  bottom: 0;
  overflow: hidden;
  direction: rtl;

  img {
    width: 1440px;
    height: 100%;
  }

  @media (max-width: 360px) {
    height: 168px;
    max-width: 1050px;
    img {
      width: 1050px;
    }
  }
`;

const LandingPageFooter = ({}) => {
  return (
    <StyledFooterWrapper>
      <img src="./static/images/home/footer-lg.png" />
    </StyledFooterWrapper>
  );
};

export default LandingPageFooter;
