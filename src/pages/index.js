/* eslint-disable react-hooks/exhaustive-deps */
import ChildSection from "wrappers/child-section";
import React, { useEffect, useState } from "react";
// import { withContext } from "store/Context";
import { GetRootContext, RootAction } from "store/Context";
import ChildListProducts from "wrappers/child-list-products";
import {  useLocation } from "react-router-dom";
const Layout = React.lazy(() => import("wrappers/layout"));

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Home = () => {
  const query = useQuery()
  const pageQuery = query?.get("page");
  const [page, setPage] = useState(pageQuery || 1);
  const [offset, setOffset] = useState(0);
  const isMobile = Boolean(
    window.navigator.userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  const [filtered, setFiltered] = useState(null);
  const filterData = (value) => {
    const { results } = context.state.collection.AllCollection;
    return results.filter(
      (pokemon) => pokemon.name.toLowerCase().search(value.toLowerCase()) != -1
    );
  };
  const context = GetRootContext();

  const onSearch = (e) => {
    const { value } = e.target;
    var filterRes = filterData(value);

    setFiltered(filterRes);
  };
  const HandleLoadMore = async (e) => {
    const {dispatch} = context;
    setPage(e);
    setOffset(e > page ? offset + 30 : offset - 30)
    dispatch({
      type: 'GET_ALL_COLLECTION_INIT',
    });
  };
  useEffect(() => {
    context.state.collection.AllCollection_status === "init" &&
      RootAction._getAll({
        offset: offset,
      });
  }, [offset]);

  return (
    <Layout title="Home">
      <ChildListProducts
        isMobile={isMobile}
        title="LIST"
        status={context.state.collection.AllCollection_status}
        data={filtered || context.state.collection.AllCollection?.results}
        onSearch={onSearch}
      />
      {context.state.collection.AllCollection_status === "success" && (
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
