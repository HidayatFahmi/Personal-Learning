import { createStore } from "redux"

const authState = {
    data : {
        isAuth : false,
    },
    cars : [
        {
            id : 1,
            name : "calya"
        },
        {
            id : 2,
            name : "agya",
        },
        {
            id : 3,
            name : "sigra"
        },
        {
            id : 4,
            name : "ayla"
        },
    ],
}

const authReducer = (state = authState) => {
    return state
}

const store = createStore(authReducer); 

export default store