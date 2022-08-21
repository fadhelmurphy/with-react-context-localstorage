import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import {combineReducer} from "./CombinedReducers";
import collectionReducer from "./reducers/collectionReducer";

export const RootContext = createContext({});

export const STORAGE_KEY = "rootState";

const Context = ({ children }) => {
  //#COMBINE STATE
  const rootReducer = { collection: collectionReducer };
  const reducers = useCallback(() => {
    return combineReducer(rootReducer);
  }, []);
  // call the function to get initial state and global reducer
  const [initialState, mainReducer] = reducers();
  // setup useReducer with the returned value of the reducers function
  const [state, dispatch] = useReducer(mainReducer, initialState, () => {
    const Local = localStorage.getItem(STORAGE_KEY);
    const ParseLocal = JSON.parse(Local);
    return Local ? ParseLocal : initialState;
  });

  // CRUD COLLECTION
  const _getAll = async () => {};
  const _getOne = async () => {};
  const deleteAll = async () => {};
  const deleteOne = async () => {};
  const updateAll = async () => {};
  const updateOne = async () => {};
  const createAll = async () => {};
  const createOne = async () => {};

  // pass in the returned value of useReducer
  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
      // action collection
      _getAll,
      _getOne,
      deleteAll,
      deleteOne,
      updateAll,
      updateOne,
      createAll,
      createOne
    }),
    [state, dispatch]
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <RootContext.Provider value={contextValue}>{children}</RootContext.Provider>
  );
};

export const GetRootContext = () => useContext(RootContext);

export const withContext = (Component) => {
  return (props) => {
    return (
      <RootContext.Consumer>
        {(value) => {
          return <Component {...props} {...value} />;
        }}
      </RootContext.Consumer>
    );
  };
};

export default Context;