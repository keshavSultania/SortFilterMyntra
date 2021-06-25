import React from "react";
import styled, { css } from "styled-components";
import Text from "../Text";

const StyledWrapper = styled.div`
  background-color: white;
  position: relative;
  width: 210px;
  height: auto;
  margin: 0 10px 30px;
  text-align: left;
  /* height: auto; */
  /* width: 200px; */
  overflow: hidden;
  display: inline-block;
  /* width: 300px; */
`;

const ImageComponent = styled.img`
  object-fit: contain;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: transform 0.5s;
  &:hover {
    transform: scale(
      1.1
    ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }
`;

const ImageWrapper = styled.div`
  width: 210px;
  height: 280px;
  overflow: hidden;
  /* min-height: 300px; */
`;

const DescriptionContainer = styled.div`
  position: relative;
  margin: 10px 0px 0px;
`;

const StyledLink = styled.a``;

const Card = (props) => {
  const {
    productId,
    product,
    productName,
    discount,
    brand,
    gender,
    price,
    mrp,
    category,
    searchImage,
    landingPageUrl,
    additionalInfo,
    images
  } = props;
  // const imageUrl = images[0].src;
  const baseURL = "https://wwww.myntra.com/";
  const link = `${baseURL}${landingPageUrl}`;
  const imageUrl = searchImage;
  const formattedMrp = `Rs.${mrp}`;
  // console.log(images[0].src);
  return (
    <StyledLink href={link}>
      <StyledWrapper>
        {/* {imageUrl} */}
        {/* <ImageWrapper imageUrl={imageUrl} /> */}
        <ImageWrapper>
          <ImageComponent src={imageUrl} />
        </ImageWrapper>
        <DescriptionContainer>
          <Text bold>{brand}</Text>
          <Text color="grey">{additionalInfo}</Text>
          <Text bold>{formattedMrp}</Text>
        </DescriptionContainer>
      </StyledWrapper>
    </StyledLink>
  );
};

export default Card;
