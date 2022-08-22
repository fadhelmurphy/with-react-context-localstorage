import React, { useEffect } from "react";
// import { withContext } from "store/Context";
import { GetRootContext } from "store/Context";

const Home = () => {
    const context = GetRootContext()
    
    console.log(context, "INI CONTEXT")
    useEffect(()=>{

      context._getOne("JOSS")
    })
  return (
    <>
      <h1>NGANU</h1>
    </>
  );
};
export default Home;
// export default withContext(Home);
