/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
// CRUD COLLECTION
export const _getAll = (dispatch) => async (payload) => {};
export const _getOne = (dispatch) => async (payload) => {
  dispatch({
    type: 'GET_ALL_COLLECTION_SUCCESS',
    payload,
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
