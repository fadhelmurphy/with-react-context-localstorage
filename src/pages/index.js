/* eslint-disable react-hooks/exhaustive-deps */
// import ChildSection from "wrappers/child-section";
import { useQuery } from "helpers/utils";
import { fetchWithStore } from "hooks/useFetchStore";
import React, { useState } from "react";
import { _getAll } from "store/actions/collectionAction";
// import { withContext } from "store/Context";
import { GetRootContext } from "store/Context";
// import ChildListProducts from "wrappers/child-list-products";
const ChildListProducts = React.lazy(() => import("wrappers/child-list-products"));
const Layout = React.lazy(() => import("wrappers/layout"));

const Home = () => {
  const query = useQuery()
  const {dispatch} = GetRootContext();
  const pageQuery = query?.get("page");
  const [page, setPage] = useState(pageQuery || 1);
  const [offset, setOffset] = useState(0);
  const isMobile = Boolean(
    window.navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  const state = fetchWithStore(_getAll, {
    offset: offset,
  }, (state) => state.collection, offset)

  const [filtered, setFiltered] = useState(null);
  const filterData = (value) => {
    const { results } = state.AllCollection;
    return results.filter(
      (pokemon) => pokemon.name.toLowerCase().search(value.toLowerCase()) != -1
    );
  };

  const onSearch = (e) => {
    const { value } = e.target;
    var filterRes = filterData(value);

    setFiltered(filterRes);
  };
  const HandleLoadMore = async (e) => {
    setPage(e);
    setOffset(e > page ? offset + 30 : offset - 30)
    dispatch({
      type: 'GET_ALL_COLLECTION_INIT',
    });
  };

  return (
    <Layout title="Home">
      <ChildListProducts
        isMobile={isMobile}
        title="LIST"
        status={state.AllCollection_status}
        data={filtered || state.AllCollection?.results}
        onSearch={onSearch}
      />
      {state.AllCollection_status === "success" && (
          <div className="wrapper-pagination">
          <button
            onClick={(e) => HandleLoadMore(page - 1)}
            disabled={page===1}
            >
              Prev
              </button>
            <button
              onClick={(e) => HandleLoadMore(page + 1)}>
                Next
                </button>
          </div>
        )}
    </Layout>
  );
};
export default Home;
// export default withContext(Home);
