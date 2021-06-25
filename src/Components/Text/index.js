import React from "react";
import styled from "styled-components";

const TextWrapper = styled.p`
  margin: 0px 0px 5px;
  font-family: "DM Sans", sans-serif;
  font-weight: ${({ bold }) => (bold ? "600" : "400")};
  color: ${({ color }) => color || "black"};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Text = ({ children, bold, color }) => {
  return (
    <TextWrapper bold={bold} color={color}>
      {children}
    </TextWrapper>
  );
};

export default Text;
