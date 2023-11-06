import { combineReducers } from "redux";
import userReducer from "./userReducer";
import authReducer from "./authReducer";

const reducers = combineReducers ({
    authReducer,
    userReducer
})

export default reducers;