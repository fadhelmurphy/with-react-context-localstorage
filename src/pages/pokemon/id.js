/* eslint-disable react-hooks/exhaustive-deps */
import ChildSection from "wrappers/child-section";
import React, { useEffect, useState } from "react";
// import { withContext } from "store/Context";
import { GetRootContext, RootAction } from "store/Context";
import ChildListProducts from "wrappers/child-list-products";
import {  useLocation, useParams } from "react-router-dom";
import ChildDetailPokemon from "wrappers/child-detail";
const Layout = React.lazy(() => import("wrappers/layout"));

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Home = () => {
  
  const router = useParams();
  const isMobile = Boolean(
    window.navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  const context = GetRootContext();

  console.log(context, "INI context");
  useEffect(() => {
      RootAction._getOne({
        id: router.id,
      });
  }, []);

  return (
    <Layout title="Detail">
      <h1>Detail</h1>
      <ChildDetailPokemon isMobile={isMobile} status={context.state.collection.DetailCollection_status} data={context.state.collection.DetailCollection} />
    </Layout>
  );
};
export default Home;
// export default withContext(Home);
