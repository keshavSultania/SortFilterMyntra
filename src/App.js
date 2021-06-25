import React, { useEffect, useState } from "react";
import CardList from "./Components/CardList";
import SearchBar from "./Components/SearchBar";
import Filter from "./Components/Filter";
import Sort from "./Components/Sort";
import { fetchCall } from "./Utils/api";

export default function App() {
  const [product, setProducts] = useState([]);
  const [productsToShow, setProductsToShow] = useState([]);
  const getResults = async () => {
    const resp = await fetchCall("https://demo7242716.mockable.io/products");
    setProducts(resp.products);
    setProductsToShow(resp.products);
  };
  useEffect(() => {
    getResults();
  }, []);

  const filterCallback = (obj) => {
    const k = Object.keys(obj);
    let finalArr = [];
    let flattened = [];
    k.forEach((c) => {
      const bc = obj[c];
      if (bc.length > 0) {
        const res = bc.map((v) => {
          const arrToFilter = finalArr.length > 0 ? finalArr : product;
          const prd = arrToFilter.filter((p) => p[c] === v);
          return prd;
        });
        flattened = [].concat(...res);
      }
      finalArr = [...flattened];
    });
    flattened.length > -1
      ? setProductsToShow(flattened)
      : setProductsToShow(product);
  };

  const sortCallback = (products) => {
    setProductsToShow(products);
  };

  const sortResetHandler = () => {
    setProductsToShow(product);
  };

  return (
    <>
      {product.length > 0 && (
        <div>
          <SearchBar products={product} setProductsToShow={setProductsToShow} />

          <div style={{ display: "flex" }}>
            <div style={{ flex: 1 }}>
              <Sort
                sortResetHandler={sortResetHandler}
                productsToShow={productsToShow}
                sortCallback={sortCallback}
                setProductsToShow={setProductsToShow}
              />
              <Filter products={product} filterCallback={filterCallback} />
            </div>
            <div style={{ flex: 4 }}>
              {productsToShow?.length > 0 && (
                <CardList products={productsToShow} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
