import React from "react";
import {  useLocation } from "react-router-dom";
export const useQuery = () => {
    const { search } = useLocation();
  
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
export const stateToPersist = (payload, initialState) => {
    const res = {}
    if(payload.length > 0)
    {payload.map((state)=>{
        res[state] = initialState[state]
    })
    return res;
    }
    else return res;
}