const intialAnotherCollection = {
  AllCollection: [],
  DetailCollection: null,
};

const anotherCollectionReducer = (
  state = intialAnotherCollection,
  action,
) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_ALL_ANOTHER_COLLECTION_SUCCESS':
      return { ...state, AllCollection: payload };
    case 'GET_DETAIL_ANOTHER_COLLECTION_SUCCESS':
      return { ...state, DetailCollection: payload };
    default:
      return state;
  }
};

export default anotherCollectionReducer;
