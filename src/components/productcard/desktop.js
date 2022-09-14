import React from "react";
import styled from '@emotion/styled'

const ProductCardDesktop = styled.div`
border: 1px solid #ddd;
border-radius: 10px;
& .img-product {
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 200px;
    background: #f2f2f2;
    position: relative;
    overflow: hidden;
}
& .img-product a {
    display: block;
    height: 100%;
    width: 100%;
}
& .img-product a img {
    object-fit: cover;
    height: 100%;
    width: 100%;
}
& .content {
    padding: 10px;
}
& .title .english {
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    margin: 10px 0 0 0;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    color: #000;
    word-break: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
/* For Mobile View */
@media screen and (max-width: 786px) {
  border: 1px solid #ddd;
  border-radius: 10px;
  & .img-product {
      border-radius: 10px 10px 0 0;
      width: 100%;
      height: 200px;
      background: #f2f2f2;
      position: relative;
      overflow: hidden;
  }
  & .img-product a {
      display: block;
      height: 100%;
      width: 100%;
  }
  & .img-product a img {
      object-fit: cover;
      height: 100%;
      width: 100%;
  }
  & .content {
      padding: 10px;
  }
  & .title .english {
      font-size: 14px;
      font-weight: 600;
      line-height: 16px;
      margin: 10px 0 0 0;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      color: #000;
      word-break: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
  }
  & .title .romaji {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: #000;
      margin: 10px 0 0 0;
      text-transform: capitalize;
      /* word-break: break-word; */
      overflow: hidden;
      /* text-overflow: ellipsis; */
      display: -webkit-box;
      /* -webkit-line-clamp: 1; */
      -webkit-box-orient: vertical;
  }
}
`

export default function Desktop({onAdd = () => {}, ...props }) {
    const { name, url
} = props;
const split = url.split("/")
const href = `/pokemon/${split[split.length - 2]}`
  return (
    <>
      <ProductCardDesktop>
        <div className="content">
            
        <div className="title">
            <a href={href} className="english">
                {name}
            </a>
        </div>
        </div>
      </ProductCardDesktop>
    </>
  );
}
