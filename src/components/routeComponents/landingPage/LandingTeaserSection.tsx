import React from "react";
import styled from "styled-components";
import GridCointainer from "../../reusableComponents/container/GridContainer";
import GridItem from "../../reusableComponents/gridItem/GridItem";
import { Heading5 } from "../../reusableComponents/text/Heading5";
import { Paragraph } from "../../reusableComponents/text/Paragraph";

const StyledCard = styled.div`
  padding: 40px;
  border-radius: 16px;
  background-color: #f5f5f7;
`;

const ChannelCard = styled.div`
  background: white;
  padding: 16px;
  margin: 0 auto 40px auto;
  max-width: 240px;
  box-shadow: 0px 0px 80px rgba(1, 12, 59, 0.16);
  border-radius: 8px;
`;

const ChannelTextWrapper = styled.div`
  margin-bottom: 16px;
  &:last-child {
    margin: 0;
  }
  p {
    padding: 0 8px;
    display: inline-block;
    vertical-align: super;
  }
`;

const ChannelInputWrapper = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 80px rgba(1, 12, 59, 0.16);
  border-radius: 8px;
  height: 56px;
  margin: 50px auto 82px;
  padding: 0 16px;

  min-width: 368px;
  overflow-y: hidden;

  img {
    display: inline-block;
    margin-right: 16px;
    vertical-align: super;
    margin-bottom: 16px;
    &:first-child {
      margin-left: 16px;
    }
    &:last-child {
      margin: 8px 0;
    }
  }

  @media (max-width: 768px) {
    img {
      margin: 16px 16px;
      &:last-child {
        display: none;
      }
    }
    max-width: 240px;
    min-width: initial;
  }
`;

const StyledWrapper = styled.div`
  margin: 0 16px;
  margin-bottom: 160px;

  @media (max-width: 768px) {
    margin-bottom: 120px;

    & > div > div {
      margin: 0 auto;
      grid-column: 2 / 12;
    }
  }

  @media (max-width: 360px) {
    margin-bottom: 80px;

    & > div > div {
      margin: 4px 16px;
      grid-column: 1 / 13;
    }
  }
`;

const LandingTeaserSection = () => {
  return (
    <StyledWrapper>
      <GridCointainer>
        <GridItem startPos={1} endPos={6}>
          <StyledCard>
            <ChannelCard>
              <ChannelTextWrapper>
                <img
                  src="./static/icons/channel/iconAddChannel.svg"
                  alt="Add channel icon"
                />
                <Paragraph style={{ color: "#5474FB" }}>New channel</Paragraph>
              </ChannelTextWrapper>
              <ChannelTextWrapper>
                <img
                  src="./static/icons/channel/iconChannel.svg"
                  alt="Channel icon"
                />
                <Paragraph>Fishing</Paragraph>
              </ChannelTextWrapper>
              <ChannelTextWrapper>
                <img
                  src="./static/icons/channel/iconChannelPurple.svg"
                  alt="Channel icon"
                />
                <Paragraph>Graphic Design</Paragraph>
              </ChannelTextWrapper>
            </ChannelCard>
            <Heading5>The fastest way to build a community</Heading5>
            <Paragraph style={{ marginTop: "8px" }}>
              Creating a community on Everchat is as simple as giving your
              channel a name.
            </Paragraph>
          </StyledCard>
        </GridItem>

        <GridItem startPos={7} endPos={12}>
          <StyledCard style={{ overflow: "auto" }}>
            <ChannelInputWrapper>
              <img src="./static/icons/channel/iconImage.svg" />
              <img src="./static/icons/channel/iconAttachment.svg" />
              <img src="./static/icons/channel/iconMic.svg" />
              <img src="./static/icons/channel/iconCode.svg" />
              <img src="./static/icons/channel/input.svg" />
            </ChannelInputWrapper>
            <Heading5>The easiest way to post</Heading5>
            <Paragraph style={{ marginTop: "8px" }}>
              Posting on Everchat is as simple as sending a direct message in
              any instant messenger.
            </Paragraph>
          </StyledCard>
        </GridItem>
      </GridCointainer>
    </StyledWrapper>
  );
};

export default LandingTeaserSection;
