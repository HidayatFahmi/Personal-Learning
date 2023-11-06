import { TYPES } from "../types";

export const onToken = (token) => {
    return({
    type : TYPES.GET_DATA_SUCCEDD,
    payload : token,
    })
}


export const onLogin = (params) => {
    return({
    type : TYPES.LOGIN,
    payload : params
    })
}
