import React from "react";
import Sidebar from "../Product/Sidebar/Sidebar";
import ProductHeader from "./ProductHeader/ProductHeader";
function Product() {
  return (
    <div className="product">
      <Sidebar />
      <ProductHeader />
    </div>
  );
}

export default Product;
