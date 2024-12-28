import React from "react";
import styled from "styled-components";

const Container = styled.div<{ justify?: string; alignItems?: string; width?: string; height?: string; gap?: string; flex?: string }>`
  display: flex;
  flex-direction: column;
  min-height: 0;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
`;
interface FlexRowProps {
  justify?: string;
  alignItems?: string;
  width?: string;
  height?: string;
  flex?: string;
  gap?: string;
  className?: string;
  children?: React.ReactNode;
}

const FlexColumn = ({ justify, alignItems, width, height, flex, gap, className, children }: FlexRowProps) => {
  return (
    <Container justify={justify} alignItems={alignItems} width={width} height={height} flex={flex} gap={gap} className={className}>
      {children}
    </Container>
  )
}

export default FlexColumn;
