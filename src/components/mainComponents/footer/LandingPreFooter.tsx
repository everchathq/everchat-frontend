import React from "react";
import styled from "styled-components";
import CaptionText from "../../reusableComponents/text/CaptionText";
import CustomLink from "../../reusableComponents/text/Link";

const PreFooterWrapper = styled.div`
  text-align: center;
  margin-bottom: 160px;

  @media (max-width: 768px) {
    margin-bottom: 120px;
  }

  @media (max-width: 360px) {
    margin-bottom: 80px;
  }
`;

const SocialMediaWrapper = styled.div`
  img {
    margin: 0 8px;
  }
`;

const LandingPreFooter = () => {
  return (
    <PreFooterWrapper>
      <img
        src="./static/images/home/ec-text-logo.svg"
        alt="Everchat text logo"
      />
      <CaptionText style={{ margin: "40px 0 8px 0" }}>
        © {new Date().getFullYear()} Everchat
      </CaptionText>

      <CaptionText style={{ margin: "0 0 8px 0" }}>
        Made with <span style={{ color: "initial" }}>💜</span> remotely from
        Denmark and Slovakia.
      </CaptionText>

      <CaptionText style={{ margin: "0 0 40px 0" }}>
        <CustomLink href="#">Privacy Policy</CustomLink> ·{" "}
        <CustomLink href="#">Terms of Service</CustomLink>
      </CaptionText>

      <SocialMediaWrapper>
        <a href="#">
          <img
            src="./static/icons/social/socialEverchat.svg"
            alt="Social Everchat icon"
          />
        </a>

        <a href="#">
          <img
            src="./static/icons/social/socialTwitter.svg"
            alt="Social Twitter icon"
          />
        </a>

        <a href="#">
          <img
            src="./static/icons/social/socialInstagram.svg"
            alt="Social Instagram icon"
          />
        </a>

        <a href="#">
          <img
            src="./static/icons/social/socialFacebook.svg"
            alt="Social Facebook icon"
          />
        </a>

        <a href="#">
          <img
            src="./static/icons/social/socialGithub.svg"
            alt="Social Github icon"
          />
        </a>
      </SocialMediaWrapper>
    </PreFooterWrapper>
  );
};

export default LandingPreFooter;
