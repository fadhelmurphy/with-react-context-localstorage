/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import { withContext } from "store/Context";
import { useParams } from "react-router-dom";
import { fetchWithStore } from "hooks/useFetchStore";
import { _getOne } from "store/actions/collectionAction";
// import ChildDetailPokemon from "wrappers/child-detail";
const ChildDetailPokemon = React.lazy(() => import("wrappers/child-detail"));
const Layout = React.lazy(() => import("wrappers/layout"));

const Home = () => {
  
  const router = useParams();
  const isMobile = Boolean(
    window.navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  const state = fetchWithStore(_getOne, {
    id: router.id,
  }, (state) => state.collection)

  return (
    <Layout title={state.DetailCollection?.name}>
      <ChildDetailPokemon isMobile={isMobile} status={state.DetailCollection_status} data={state.DetailCollection} />
    </Layout>
  );
};
export default Home;
// export default withContext(Home);
