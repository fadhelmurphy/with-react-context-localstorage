import React, {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import combineReducer from "./CombinedReducers";
import rootReducer from "./reducers";
import rootAction from "./actions";
import { stateToPersist } from "helpers/utils";

export const RootContext = createContext({});

export const STORAGE_KEY = "rootState";

const selectedStateToPersist = ['collection'];

const Context = ({ children }) => {
  //#COMBINE STATE
  const reducers = useCallback(() => {
    return combineReducer(rootReducer);
  }, []);
  // call the function to get initial state and global reducer
  const [initialState, mainReducer] = reducers();
  // setup useReducer with the returned value of the reducers function
  const [state, dispatch] = useReducer(mainReducer, initialState, () => {
    const Local = localStorage.getItem(STORAGE_KEY);
    const ParseLocal = JSON.parse(Local);
    return Local ? {...initialState, ...ParseLocal} : initialState;
  });

  // pass in the returned value of useReducer
  const contextValue = useMemo(
    () => {
      return {
        state,
        dispatch,
        // action collection
        ...rootAction(dispatch),
      }
    },
    [state, dispatch, rootAction]
  );

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToPersist(selectedStateToPersist,state)));
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
