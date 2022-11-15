/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect} from 'react';
import { GetRootContext } from "store/Context";

export const fetchWithStore = (action, data, returnState, trigger) => {
    const context = GetRootContext();

    useEffect(() => {
        const {dispatch} = context;
        action(dispatch)(data);
        return () => false;
    }, [trigger]);

    return returnState(context.state)
}