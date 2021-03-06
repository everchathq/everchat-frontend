import React, { FC } from "react";
import styled, { CSSProperties } from "styled-components";

const StyledGridItem = styled.div<{ startPos: number; endPos: number }>`
  ${props => `grid-column: ${props.startPos} / ${props.endPos + 1};`}
`;

interface GridItemsProps {
  startPos: number;
  endPos: number;
  style?: CSSProperties;
}

const GridItem: FC<GridItemsProps> = ({
  startPos,
  endPos,
  style,
  children,
  ...others
}) => {
  return (
    <StyledGridItem
      style={style}
      startPos={startPos}
      endPos={endPos}
      {...others}
    >
      {children}
    </StyledGridItem>
  );
};

export default GridItem;
