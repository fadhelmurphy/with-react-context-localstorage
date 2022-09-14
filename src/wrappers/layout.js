import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Helmet } from "react-helmet";

const MenuWrapper = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
position: relative;
& .list-menu {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
  & .list-menu div:not(:first-child) {
    margin: 0 0 0 20px;
  }
  & .list-menu div a {
    font-family: system-ui;
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;
  }
  & .list-menu div a:not(:first-child) {
    margin-left: 20px;
  }
`;
const Menu = (props) => {
  return (
    <MenuWrapper>
      <div
        className={
          `list-menu ` +
          css`
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          `
        }
      >
        {props.menuList.map((item) => (
          <div>
            <Link to={item.url}>{item.text}</Link>
            <br />
          </div>
        ))}
      </div>
    </MenuWrapper>
  );
};
export default function Layout({ title, children }) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Menu
        menuList={[
          {
            url: "/",
            text: "Home",
          },
          {
            url: "/collection",
            text: "My Collection",
          },
        ]}
      />
      {children}
    </>
  );
}
