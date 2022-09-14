import React from "react";
import ProductCard from "../../components/productcard";
import styled from "@emotion/styled";

const ProductListSection = styled.div`
background: #fff;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 0 20px 20px 20px;
& .child-list-products-mobile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}
`
export default function Mobile({ title = "", data = [], status , ...props }) {
  return (
    <>
        <ProductListSection>
          <div className="head">
            <h1 className="title">{title}</h1>
          </div>
          <div className="content">
            <div className="child-list-products-mobile">
            {status === "loading" && "Loading..."}
            {
                status === "success" && data && data.map((item, idx)=> item && (
                    <ProductCard key={idx} isMobile={false} {...props} {...item} />
                ))
            }
            </div>
          </div>
        </ProductListSection>
    </>
  );
}
