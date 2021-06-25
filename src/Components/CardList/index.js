import React from "react";
import Card from "../Card";

const CardList = (props) => {
  const { products } = props;
  return products.map((p) => <Card key={p.productId} {...p} />);
};

export default CardList;
