import React, { FC } from "react";
import styled from "styled-components";
import { Heading5 } from "../text/Heading5";
import { Paragraph } from "../text/Paragraph";

const StyledTextWrapper = styled.div<{ orientation: orientation }>`
  background: #f5f5f7;
  border-radius: 16px;
  margin: auto 0;
  ${props =>
    props.orientation === "left"
      ? `
    padding:40px 40px 40px 120px;
    margin-left:-120px;

    @media (max-width: 400px) {
        margin-right:16px;
        margin-left:-180px;
        padding:40px;
      }
    `
      : `
    padding:40px 120px 40px 40px;
    margin-right:-120px;

    @media (max-width: 400px) {
        margin-left:16px;
        margin-right:-180px;
        padding:40px;
      }
      `}
`;

const Wrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div<{ orientation: orientation }>`
  flex-basis: 100%;
  min-width: 200px;
  max-width: 200px;
  width: 200px;
  height: 240px;
  position: relative;
  margin: auto;

  img {
    width: auto;
    max-width: 100%;
    height: 100%;
  }

  @media (max-width: 400px) {
    ${props =>
      props.orientation === "right" ? `left: 120px;` : `right:120px;`}
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
        <ImageWrapper orientation={orientation}>
          <img src={imageSrc} />
        </ImageWrapper>
      )}

      <StyledTextWrapper orientation={orientation}>
        <Heading5 style={{ marginBottom: "8px" }}>{title}</Heading5>
        <Paragraph>{description}</Paragraph>
      </StyledTextWrapper>

      {orientation === "right" && (
        <ImageWrapper orientation={orientation}>
          <img src={imageSrc} />
        </ImageWrapper>
      )}
    </Wrapper>
  );
};

export default PeepCard;
