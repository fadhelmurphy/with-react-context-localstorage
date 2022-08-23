import collectionAction from './collectionAction';
export default (dispatch) => ({
  ...collectionAction(dispatch),
});
