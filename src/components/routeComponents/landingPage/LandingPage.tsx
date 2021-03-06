import React from "react";
import LandingPageFooter from "../../mainComponents/footer/LandingPageFooter";
import LandingPreFooter from "../../mainComponents/footer/LandingPreFooter";
import GridCointainer from "../../reusableComponents/container/GridContainer";
import GridItem from "../../reusableComponents/gridItem/GridItem";
import LandingPageHeader from "./LandingPageHeader";
import LandingPeepsSection from "./LandingPeepsSection";

const LandingPage = () => {
  return (
    <>
      <GridCointainer>
        <GridItem startPos={1} endPos={12}>
          <LandingPageHeader />
        </GridItem>
      </GridCointainer>

      <LandingPeepsSection />

      <GridCointainer>
        <GridItem startPos={1} endPos={12}>
          <LandingPreFooter />
        </GridItem>
      </GridCointainer>

      <LandingPageFooter />
    </>
  );
};

export default LandingPage;
