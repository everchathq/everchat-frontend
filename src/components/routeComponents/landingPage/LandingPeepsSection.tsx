import React from "react";
import styled from "styled-components";
import GridCointainer from "../../reusableComponents/container/GridContainer";
import GridItem from "../../reusableComponents/gridItem/GridItem";
import PeepCard from "../../reusableComponents/peepCard/PeepCard";

const StyledWrapper = styled.section`
  margin: 120px 0;

  @media (max-width: 768px) {
    & > div > div:nth-child(odd) {
      grid-column: 1 / 10;
    }

    & > div > div:nth-child(even) {
      grid-column: 4 / 13;
    }
  }

  @media (max-width: 560px) {
    margin: 80px 0;

    & > div > div:nth-child(odd) {
      grid-column: 2 / 13;
    }

    & > div > div:nth-child(even) {
      grid-column: 1 / 12;
    }
  }
`;

const LandingPeepsSection = () => {
  return (
    <StyledWrapper>
      <GridCointainer>
        <GridItem startPos={1} endPos={7} style={{ margin: "8px 0" }}>
          <PeepCard
            imageSrc="./static/images/peeps/open-peeps-bust-democratized.png"
            title="Democratized"
            description="Everchat communities have no admins. Instead, we give power to the community members."
          />
        </GridItem>

        <GridItem startPos={6} endPos={12} style={{ margin: "8px 0" }}>
          <PeepCard
            orientation={"right"}
            imageSrc="./static/images/peeps/open-peeps-bust-anonym.png"
            title="Anonymous"
            description="Everchat communities have no admins. Instead, we give power to the community members."
          />
        </GridItem>

        <GridItem startPos={1} endPos={7} style={{ margin: "8px 0" }}>
          <PeepCard
            imageSrc="./static/images/peeps/open-peeps-bust-censorless.png"
            title="Censorless"
            description="Everchat communities have no admins. Instead, we give power to the community members."
          />
        </GridItem>

        <GridItem startPos={6} endPos={12} style={{ margin: "8px 0" }}>
          <PeepCard
            orientation={"right"}
            imageSrc="./static/images/peeps/open-peeps-bust-free.png"
            title="Free"
            description="Everchat communities have no admins. Instead, we give power to the community members."
          />
        </GridItem>
      </GridCointainer>
    </StyledWrapper>
  );
};

export default LandingPeepsSection;
