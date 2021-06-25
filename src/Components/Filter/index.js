import React, { useState } from "react";
import Option from "../Option";
import { OptionList } from "../Option";
import Text from "../Text";
import { FILTER_DATA } from "./constant";

const Filter = ({ products, filterCallback }) => {
  const [active, setActive] = useState({});

  const massageFilteredOptions = ({ type, category }) => {
    const m = active;
    if (m[type]) {
      const index = m[type].indexOf(category);
      if (index > -1) {
        const array = [...m[type]];
        m[type] = [...m[type], category];
        array.splice(index, 1);
        m[type] = array;
      } else m[type] = [...m[type], category];
    } else {
      m[type] = [category];
    }
    return m;
  };

  const combineFilterChoices = (type, category) => {
    const res = massageFilteredOptions({ type, category });
    setActive(res);
    filterCallback(res);
  };

  const selectiveReset = (type) => {
    let a = active;
    a[type] = [];
    setActive(a);
    filterCallback(a);
  };

  return (
    <div style={{ marginBottom: "20px", background: "pink", padding: "10px" }}>
      <OptionList onClick={() => setActive({})}>
        <Text>Reset All</Text>
      </OptionList>
      {FILTER_DATA.map((f) => {
        return (
          <Option
            title={f.title}
            products={products}
            filterKey={f.filterKey}
            selectedOption={active}
            selectiveReset={selectiveReset}
            combineFilterChoices={combineFilterChoices}
          />
        );
      })}
    </div>
  );
};

export default Filter;
