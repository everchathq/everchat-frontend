import React, { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

interface LinkProps {
  href: string;
}

const StyledLinkWrapper = styled.span`
  a {
    color: #010c3b;
    opacity: 0.4;
  }
`;

const CustomLink: FC<LinkProps> = ({ href, children }) => {
  return (
    <StyledLinkWrapper>
      <Link href={href}>{children}</Link>
    </StyledLinkWrapper>
  );
};

export default CustomLink;
