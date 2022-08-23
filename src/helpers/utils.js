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