const intialCollection = {
  AllCollection:[],
  DetailCollection:null,
}

export const collectionReducer = (state=intialCollection, action) => {
  const {type,payload} = action
  switch (type) {
    case "GET_ALL_COLLECTION_SUCCESS":
      return { ...state, AllCollection: payload };
    case "GET_DETAIL_COLLECTION_SUCCESS":
      return { ...state, DetailCollection: payload };
    default:
      return state;
  }
};