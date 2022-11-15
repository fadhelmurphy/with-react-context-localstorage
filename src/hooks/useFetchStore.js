/* eslint-disable react-hooks/rules-of-hooks */
import {useEffect, useCallback, useMemo} from 'react';
import { GetRootContext } from "store/Context";

export const fetchWithStore = (action, data, returnState, trigger) => {
    const context = GetRootContext();
    const {dispatch} = context;

    useEffect(() => {
        action(dispatch)(data);
        return () => false;
    }, [trigger]);

    return [useMemo(() => returnState(context.state), [context.state, data]), () => action(dispatch)(data)
    ]
}