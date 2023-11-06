import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

export const reducers = combineReducers({
    authReducer,
    productReducer,
    userReducer,
});

    