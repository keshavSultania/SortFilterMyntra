import React from "react";
import Text from "../Text";
import styled from "styled-components";

const OptionContainer = styled.div`
  max-height: 300px;
  overflow: scroll;
`;

const OptionWrapper = styled.div`
  margin: 0px 0px 20px;
  border: 1px solid black;
  padding: 10px;
`;

export const OptionList = styled.li`
  cursor: pointer;
  list-style-type: none;
`;

const Option = (props) => {
  const {
    products,
    title,
    filterKey,
    selectiveReset,
    combineFilterChoices,
    selectedOption
  } = props;

  const values = products.map((p) => p[filterKey]);
  const uniqueValues = [...new Set(values)];
  uniqueValues.sort();

  const handleClick = (c) => {
    combineFilterChoices(filterKey, c);
  };

  const resetHandler = () => {
    selectiveReset(filterKey);
  };

  const isValueAlreadySelected = (val) => {
    return selectedOption[filterKey]?.indexOf(val) > -1;
  };
  return (
    <OptionWrapper>
      <Text bold>{title}</Text>
      <OptionList onClick={() => resetHandler()}>
        <Text>Reset</Text>
      </OptionList>
      <OptionContainer>
        {uniqueValues.map((c) => {
          return (
            <OptionList onClick={() => handleClick(c)}>
              <Text bold={isValueAlreadySelected(c)}>{c}</Text>
            </OptionList>
          );
        })}
      </OptionContainer>
    </OptionWrapper>
  );
};

export default Option;
