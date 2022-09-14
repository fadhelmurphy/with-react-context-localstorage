const intialCollection = {
  AllCollection: [],
  AllCollection_status: "init",
  DetailCollection: {},
  DetailCollection_status: "init",
};

const collectionReducer = (state = intialCollection, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ALL_COLLECTION_INIT':
      return { ...state, AllCollection_status: "init"};
    case 'GET_ALL_COLLECTION_LOADING':
      return { ...state, AllCollection_status: "loading"};
    case 'GET_ALL_COLLECTION_FAILED':
      return { ...state, AllCollection_status: "failed", AllCollection: [] };
    case 'GET_ALL_COLLECTION_SUCCESS':
      return { ...state, AllCollection: payload, AllCollection_status: "success" };
      case 'GET_DETAIL_COLLECTION_INIT':
        return { ...state, DetailCollection_status: "init"};
      case 'GET_DETAIL_COLLECTION_LOADING':
        return { ...state, DetailCollection_status: "loading"};
      case 'GET_DETAIL_COLLECTION_FAILED':
        return { ...state, DetailCollection_status: "failed", DetailCollection: {} };
      case 'GET_DETAIL_COLLECTION_SUCCESS':
        return { ...state, DetailCollection: payload, DetailCollection_status: "success" };
    default:
      return state;
  }
};

export default collectionReducer;
