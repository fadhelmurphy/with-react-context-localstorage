import React from "react";
import ProductCard from "../../components/productcard";
import styled from "@emotion/styled";

const ProductListSection = styled.div`
background: #fff;
-webkit-box-sizing: border-box;
-moz-box-sizing: border-box;
box-sizing: border-box;
padding: 0 20px 20px 20px;
& .child-list-products-desktop {
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 15px;
}
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
/* For Mobile View */
@media screen and (max-width: 786px) {
  background: #fff;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px 20px 20px;
  & .child-list-products-desktop {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }
}
`
export default function Desktop({ title = "", data = [], status , onSearch, ...props }) {
  return (
    <>
    <ProductListSection>
        <div className="head">
          <h1 className="title">{title}</h1>
      <input type="text" className="search-input-field" onChange={onSearch} placeholder="Search..." />
        </div>
        <div className="content">
          <div className="child-list-products-desktop">
            {status === "loading" && "Loading..."}
            {
                status === "success" && data && data.map((item, idx)=> item && (
                    <ProductCard key={idx} {...props} isMobile={false} {...item} />
                ))
            }
          </div>
        </div>
      </ProductListSection>
    </>
  );
}
