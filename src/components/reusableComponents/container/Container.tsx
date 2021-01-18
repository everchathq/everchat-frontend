import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
`;

const Container = ({ children, ...others }) => {
  return <StyledContainer {...others}>{children}</StyledContainer>;
};

export default Container;
