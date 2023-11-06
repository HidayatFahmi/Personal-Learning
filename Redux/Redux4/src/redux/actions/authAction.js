import { TYPES } from "../type"
// Action creator

export const onLogin = (params) => {
    return  {
        type : TYPES.LOGIN,
        payload : params,
    }
}

export const onLogout = (params) => {
    return{
        type : TYPES.LOGOUT,
        payload : params,
    }
}

