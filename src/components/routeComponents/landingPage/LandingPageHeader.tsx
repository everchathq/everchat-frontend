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
            Build your community in the <ImageText textValue="fastest" /> way
            ever
          </MainHeadline>
        </div>
      </Container>
    </>
  );
};

export default LandingPageHeader;
