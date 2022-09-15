/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
// import { withContext } from "store/Context";
import { GetRootContext, RootAction } from "store/Context";
import {  useLocation, useParams } from "react-router-dom";
// import ChildDetailPokemon from "wrappers/child-detail";
const ChildDetailPokemon = React.lazy(() => import("wrappers/child-detail"));
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

  useEffect(() => {
      RootAction._getOne({
        id: router.id,
      });
  }, []);

  return (
    <Layout title={context.state.collection.DetailCollection.name}>
      <ChildDetailPokemon isMobile={isMobile} status={context.state.collection.DetailCollection_status} data={context.state.collection.DetailCollection} />
    </Layout>
  );
};
export default Home;
// export default withContext(Home);
