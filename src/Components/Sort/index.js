import { useState } from "react";
import Text from "../Text";
import { LIST } from "./constant";
const Sort = (props) => {
  const { productsToShow, sortCallback, sortResetHandler } = props;

  const [active, setActive] = useState(null);

  const handleClick = (key) => {
    setActive(key);
    const arr = JSON.parse(JSON.stringify(productsToShow));
    arr.sort((a, b) => {
      return a[key] - b[key];
    });
    sortCallback(arr);
  };

  const resetHandler = () => {
    sortResetHandler();
    setActive(null);
  };
  return (
    <div style={{ marginBottom: "20px", background: "teal", padding: "20px" }}>
      <Text bold>SORT BY</Text>
      <div onClick={() => resetHandler()}>
        <Text>Reset</Text>
      </div>
      {LIST.map((l) => {
        return (
          <div onClick={() => handleClick(l.key)}>
            <Text bold={l.key === active}>{l.title}</Text>
          </div>
        );
      })}
    </div>
  );
};

export default Sort;
