/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
// CRUD COLLECTION
export const _getAll = (dispatch) => async (payload) => {
  const {offset} = payload;
  dispatch({
    type: 'GET_ALL_COLLECTION_LOADING',
  });
  
  await fetch(`${process.env.REACT_APP_API}?offset=${offset}&limit=30`)
  .then(async (res)=>{
    const resJ = await res.json();
    dispatch({
      type: 'GET_ALL_COLLECTION_SUCCESS',
      payload: resJ,
    });
  }).catch((error) => {
    dispatch({
      type: 'GET_ALL_COLLECTION_FAILED',
    });
  });
};
export const _getOne = (dispatch) => async (payload) => {
  // console.log(`${process.env.REACT_APP_API}/${payload.id}`)
  dispatch({
    type: 'GET_DETAIL_COLLECTION_LOADING',
  });
  
  await fetch(`${process.env.REACT_APP_API}/${payload.id}`)
  .then(async (res)=>{
    const resJ = await res.json();
    dispatch({
      type: 'GET_DETAIL_COLLECTION_SUCCESS',
      payload: resJ,
    });
  }).catch((error) => {
    dispatch({
      type: 'GET_DETAIL_COLLECTION_FAILED',
    });
  });
};
export const deleteAll = (dispatch) => async (payload) => {};
export const deleteOne = (dispatch) => async (payload) => {};
export const updateAll = (dispatch) => async (payload) => {};
export const updateOne = (dispatch) => async (payload) => {};
export const createAll = (dispatch) => async (payload) => {};
export const createOne = (dispatch) => async (payload) => {};

const rootAction = (dispatch) => ({
  _getAll: _getAll(dispatch),
  _getOne: _getOne(dispatch),
  deleteAll: deleteAll(dispatch),
  deleteOne: deleteOne(dispatch),
  updateAll: updateAll(dispatch),
  updateOne: updateOne(dispatch),
  createAll: createAll(dispatch),
  createOne: createOne(dispatch),
});

export default rootAction;
