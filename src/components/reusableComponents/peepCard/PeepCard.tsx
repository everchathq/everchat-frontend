import React, { FC } from "react";
import styled from "styled-components";
import { Heading5 } from "../text/Heading5";
import { Paragraph } from "../text/Paragraph";

const StyledTextWrapper = styled.div<{ orientation: orientation }>`
  background: #f5f5f7;
  border-radius: 16px;
  height: 100%;
  ${props =>
    props.orientation === "left"
      ? `
      margin-left: -120px;
      padding: 40px 40px 40px 120px;

      @media (max-width: 460px){
        display:inline-block;
        margin:0 16px;
      }
      @media (max-width: 360px){
        padding-left:40px;
      }
    `
      : `
      margin-right: -120px;
      padding: 40px 120px 40px 40px;

      @media (max-width: 460px){
          display:inline-block;
          margin:0 16px;
      }
      @media (max-width: 360px){
        padding-right:40px;
      }
      `}
`;

const ImageWrapper = styled.div<{ orientation: orientation }>`
  width: 200px;
  height: 240px;
  text-align: center;

  @media (max-width: 360px) {
    width: 140px;
    height: 168px;
  }
`;
const PeepImage = styled.img`
  width: auto;
  max-width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  @media (max-width: 460px) {
    display: inline-block;
  }
`;

const PeepSection = styled.div<{ orientation: orientation }>`
  position: relative;
  top: -40px;

  @media (max-width: 768px) {
    top: 0;
  }

  @media (max-width: 460px) {
    width: 0;
    ${props =>
      props.orientation === "left"
        ? `
    right: 80px;`
        : `right:140px;`}
    top: 55px;
    display: inline-block;
  }
  @media (max-width: 360px) {
    top: 0px;
    ${props =>
      props.orientation === "left"
        ? `
      right: 100px;`
        : `right:60px;`}
  }
`;

type orientation = "left" | "right";

interface props {
  title: string;
  description: string;
  imageSrc: string;
  orientation?: orientation;
}

const PeepCard: FC<props> = ({
  title,
  description,
  imageSrc,
  orientation = "left"
}) => {
  return (
    <Wrapper>
      {orientation === "left" && (
        <PeepSection orientation={orientation}>
          <ImageWrapper orientation={orientation}>
            <PeepImage src={imageSrc} />
          </ImageWrapper>
        </PeepSection>
      )}

      <StyledTextWrapper orientation={orientation}>
        <Heading5 style={{ marginBottom: "8px" }}>{title}</Heading5>
        <Paragraph>{description}</Paragraph>
      </StyledTextWrapper>

      {orientation === "right" && (
        <PeepSection orientation={orientation}>
          <ImageWrapper orientation={orientation}>
            <PeepImage src={imageSrc} />
          </ImageWrapper>
        </PeepSection>
      )}
    </Wrapper>
  );
};

export default PeepCard;
