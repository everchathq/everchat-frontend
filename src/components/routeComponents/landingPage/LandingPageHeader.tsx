import React from "react";
import Container from "../../reusableComponents/container/Container";
import MainHeadline from "../../reusableComponents/headline/MainHeadline";
import ImageText from "../../reusableComponents/imageText/ImageText";

const LandingPageHeader = () => {
  return (
    <>
      <Container>
        <div>
          <MainHeadline>
            The place to build <ImageText textValue="unbiased" /> communities
          </MainHeadline>
        </div>
      </Container>
    </>
  );
};

export default LandingPageHeader;
