import React from "react";
import ProductCard from "../../components/productcard";
import styled from "@emotion/styled";

const ProductListSection = styled.div`
background: #fff;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 0 20px 20px 20px;
& .head {
  display: flex;
  justify-content: start;
  align-items: center;
  grid-gap: 15px;
}
& input.search-input-field {
  width: 100%;
  height: 36px;
  background-color: #FFF;
  border-radius: 0;
  border: 1px solid #000;
  border-bottom-width: 3px;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  line-height: 16px;
  padding: 0 16px;
  transition: all .2s ease;
}
& .child-list-products-mobile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
}
`
export default function Mobile({ title = "", data = [], status, onSearch , ...props }) {
  return (
    <>
        <ProductListSection>
          <div className="head">
            <h1 className="title">{title}</h1>
            <input type="text" onChange={onSearch} placeholder="Search..." />
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
