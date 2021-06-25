import React from "react";
import styled from "styled-components";

const InputContainer = styled.input`
  height: 20px;
`;

const InputWrapper = styled.div`
  display: block;
  position: relative;
  text-align: center;
  margin: 10px;
`;

const SearchBar = (props) => {
  const { products, setProductsToShow } = props;

  const searchFilter = (freeText) => {
    const list = products.filter((p) => {
      const { productName } = p;
      if (productName.toLowerCase().includes(freeText)) return p;
      return null;
    });
    setProductsToShow(list);
  };

  const onTextChangeCallback = (e) => {
    let val = e.target.value;
    val = val.toLowerCase();
    searchFilter(val);
  };
  return (
    <InputWrapper>
      <InputContainer onChange={(e) => onTextChangeCallback(e)} />
    </InputWrapper>
  );
};

export default SearchBar;
