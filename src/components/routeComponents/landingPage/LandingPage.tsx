import React from "react";
import LandingPageFooter from "../../mainComponents/footer/LandingPageFooter";
import LandingPreFooter from "../../mainComponents/footer/LandingPreFooter";
import GridCointainer from "../../reusableComponents/container/GridContainer";
import GridItem from "../../reusableComponents/gridItem/GridItem";
import { Display3 } from "../../reusableComponents/text/Display3";
import LandingPageHeader from "./LandingPageHeader";
import LandingPeepsSection from "./LandingPeepsSection";
import LandingTeaserSection from "./LandingTeaserSection";

const LandingPage = () => {
  return (
    <>
      <GridCointainer>
        <GridItem startPos={1} endPos={12}>
          <LandingPageHeader />
        </GridItem>
      </GridCointainer>

      <LandingPeepsSection />

      <LandingTeaserSection />

      <GridCointainer>
        <GridItem startPos={1} endPos={12}>
          <Display3 style={{ textAlign: "center" }}>
            Join hundreds of communities or build your own
          </Display3>
        </GridItem>

        <GridItem startPos={1} endPos={12}>
          <LandingPreFooter />
        </GridItem>
      </GridCointainer>

      <LandingPageFooter />
    </>
  );
};

export default LandingPage;
