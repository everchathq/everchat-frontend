import React, { FC } from "react";
import styled from "styled-components";

const StyledBackgroundImage = styled.span`
  background-image: url(./static/images/home/gradient.jpg);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

interface props {
  textValue: string;
}

const ImageText: FC<props> = ({ textValue }) => {
  return (
    <StyledBackgroundImage>
      <span>{textValue}</span>
    </StyledBackgroundImage>
  );
};

export default ImageText;
