import React, { FC } from "react";
import styled from "styled-components";

const StyledBackgroundImage = styled.span`
  background-image: url(https://www.pennington.com/-/media/images/pennington-na/us/blog/seed/all-you-need-to-know-about-zoysia-grass/zoysia-header.jpg?h=480&la=en&w=1140&hash=E78389530F53CF0D0A44E454E27F379D5801D760);
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
