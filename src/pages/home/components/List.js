import React from "react";
import { ProductList } from "../style";

const List = props => {
  return (
    <div>
      <ProductList>{props.pageList}</ProductList>
    </div>
  );
};

export default List;
