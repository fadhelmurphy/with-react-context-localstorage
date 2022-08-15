import React from "react";
import { withContext } from "../store/Context";

const Home = (props) => {
    console.log(props, "INI CONTEXT")
  return (
    <>
      <h1>NGANU</h1>
    </>
  );
};
export default withContext(Home);
